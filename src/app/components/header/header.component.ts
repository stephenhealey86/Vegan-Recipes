import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public animate(event: MouseEvent): void {
    try {
      const LINK = event.srcElement as HTMLLinkElement;
      const ICON = LINK.children[0] as HTMLElement;
      ICON.animate([
        // keyframes
        { transform: 'rotate(0)' },
        { transform: 'rotate(360deg)' },
        { transform: 'rotate(0)' }
      ], {
        // timing options
        duration: 2000,
        iterations: 1
      });
          } catch (error) {
          console.log(error);
          }
        }

}
