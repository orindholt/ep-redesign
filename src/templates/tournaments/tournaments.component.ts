import { Component } from '@angular/core';

@Component({
  selector: 'tournaments',
  templateUrl: './tournaments.component.html'
})

export class TournamentsComponent {
  games = [
    {
      imgSrc: "./assets/samurai-game.png",
      altText: "Samurai Game",
      days: 2,
      time: "01:29:51",
      cost: {
        euro: 25,
        ep: "25.000"
      }
    },
    {
      imgSrc: "./assets/bankjob-game.png",
      altText: "Bank Job Game",
      days: 1,
      time: "15:04:21",
      cost: {
        euro: 100,
        ep: "55.000"
      }
    }
  ]
}
