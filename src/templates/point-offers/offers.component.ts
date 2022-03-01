import { Component } from '@angular/core';

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html'
})

export class OffersComponent {
  offers = [
    {
      iconSrc: "./assets/slot-machine.svg",
      caption: "Premium Casinos",
      point: "300",
      color: "#16C07F",
      anchor: "#"
    },
    {
      iconSrc: "./assets/crown.svg",
      caption: "Live tournaments",
      point: "15",
      color: "#FF296D",
      anchor: "#"
    },
    {
      iconSrc: "./assets/coin.svg",
      caption: "Exclusive products",
      point: "20",
      color: "#4E97D9",
      anchor: "#"
    },
  ]
}
