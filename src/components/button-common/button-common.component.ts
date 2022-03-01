import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-common',
  templateUrl: './button-common.component.html'
})
export class ButtonOrangeComponent {
  @Input() text!: string;
  @Input() anchor!: string;
  @Input() width = "6.25rem";
}
