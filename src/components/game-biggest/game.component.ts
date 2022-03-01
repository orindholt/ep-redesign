import { Component } from '@angular/core';

@Component({
  selector: 'game-biggest',
  templateUrl: './game.component.html'
})
export class GameComponent {
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  currentDate = new Date().getMonth();
  currentMonth = this.monthNames[this.currentDate];
}
