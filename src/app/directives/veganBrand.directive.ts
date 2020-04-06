import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appVeganBrand]'
})
export class VeganBrandDirective {

  direction = false;

  constructor() { }


  @HostListener('mouseenter', ['$event']) animate(event: MouseEvent): void {
    try {
      const LINK = event.srcElement as HTMLLinkElement;
      const ICON = LINK.children[0] as HTMLElement;
      let angle = Math.floor(Math.random() * 360 + 180);
      const time = Math.floor(Math.random() * 1500 + 500);
      const count = Math.floor(Math.random() * 3 + 1);
      angle = this.direction ? angle : angle * -1;
      this.direction = !this.direction;

      ICON.animate([
        // keyframes
        { transform: 'rotate(0)' },
        { transform: `rotate(${angle}deg)` },
        { transform: 'rotate(0)' }
      ], {
        // timing options
        duration: time,
        iterations: count
      });
      } catch (error) {
        console.log(error);
      }
  }
}
