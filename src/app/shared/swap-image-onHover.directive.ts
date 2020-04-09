import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSwapImageOnHover]'
})
export class SwapImageOnHoverDirective implements OnInit {

  @Input('appSwapImageOnHover') alternativeImageSrc: string;

  private img: HTMLImageElement;
  private originalImageSrc: string;

  constructor(private ref: ElementRef) { }

  ngOnInit(): void {
    this.img = this.ref.nativeElement as HTMLImageElement;
    this.originalImageSrc = this.img.src;
  }

  @HostListener('mouseenter') swapImage(): void {
    this.img.src = this.alternativeImageSrc;
  }

  @HostListener('mouseleave') restoreImage(): void {
    this.img.src = this.originalImageSrc;
  }

}
