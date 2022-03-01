import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-slide',
  templateUrl: './game-slide.component.html'
})
export class GameSlideComponent {
  @Input() gameObj!: any;
}
