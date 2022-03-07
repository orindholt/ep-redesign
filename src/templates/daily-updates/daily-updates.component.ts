import { Component } from '@angular/core';

@Component({
  selector: 'daily-updates',
  templateUrl: './daily-updates.component.html',
})
export class DailyUpdatesComponent {
  updates = [
    {
      typeString: "Claim",
      game: "",
      color: "#FFD45B",
      altColor: "#FF930F",
      caption: "Your daily bonus is here!",
    },
    {
      typeString: "Play",
      game: "Sweet Candy",
      color: "#FF2D6C",
      altColor: "#FF5858",
      caption: "We just launched Sweet Candy Try it now",
    },
    {
      typeString: "Claim",
      game: "",
      color: "#FFD45B",
      altColor: "#FF930F",
      caption: "Connect to Google to claim your bonus",
    },
    {
      typeString: "Dismiss",
      game: "",
      color: "#BCC6D6",
      altColor: "",
      caption: "Johnny741 just won 18.000 EP !",
    },
    {
      typeString: "Dismiss",
      game: "",
      color: "#BCC6D6",
      altColor: "",
      caption: "Johnny44 just won 25.000 EP !",
    },
    {
      typeString: "Claim",
      game: "",
      color: "#FFD45B",
      altColor: "#FF930F",
      caption: "Connect to Facebook to claim your bonus",
    },
    {
      typeString: "Play",
      game: "Moonstone",
      color: "#FF2D6C",
      altColor: "#FF5858",
      caption: "A new Moonstone tournament just started",
    },
  ]
}
