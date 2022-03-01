import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-orange',
  templateUrl: './button-o.component.html'
})
export class ButtonOrangeComponent {
  @Input() text!: string;
  @Input() anchor!: string;
}
