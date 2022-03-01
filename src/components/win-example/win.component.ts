import { Component, Input } from '@angular/core';

@Component({
  selector: 'win-example',
  templateUrl: './win.component.html'
})
export class WinComponent {
  @Input() winAmount = 1800;
}
