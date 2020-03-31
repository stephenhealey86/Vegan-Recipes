import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @Input() message: string;
  @Input() delay: number;
  @Input() visible: boolean;
  public messageVisible = false;

  constructor() { }

  ngOnInit() {
    if (this.delay > 0) {
      setTimeout(() => {
        this.messageVisible = true;
      }, this.delay);
    } else {
      this.messageVisible = true;
    }
  }

}
