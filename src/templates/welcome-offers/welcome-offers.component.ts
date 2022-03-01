import { Component } from '@angular/core';

@Component({
  selector: 'welcome-offers',
  templateUrl: './welcome-offers.component.html'
})

export class WelcomeOffersComponent {
  offers = [
    {
      imgSrc: "./assets/welcome-offers/tonybet.png",
      altText: "Tonybet",
      euroClaim: 120,
      golden: false,
    },
    {
      imgSrc: "./assets/welcome-offers/luckydreams.png",
      altText: "Lucky Dreams",
      euroClaim: 120,
      golden: true,
    },
    {
      imgSrc: "./assets/welcome-offers/kingbilly.png",
      altText: "King Billy",
      euroClaim: 120,
      golden: false,
    },
    {
      imgSrc: "./assets/welcome-offers/cashimashi.png",
      altText: "Cashimashi",
      euroClaim: 120,
      golden: false,
    },
    {
      imgSrc: "./assets/welcome-offers/casiplay.png",
      altText: "Casiplay",
      euroClaim: 120,
      golden: false,
    },
    {
      imgSrc: "./assets/welcome-offers/casinotown.png",
      altText: "Casinotown",
      euroClaim: 120,
      golden: false,
    },
  ]
}
