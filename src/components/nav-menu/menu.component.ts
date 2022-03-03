import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nav-menu',
  templateUrl: './menu.component.html'
})

export class MenuComponent {
  @Input() isShown: any;
  @Input() menuList: any;
  @Output() showLoginEvent = new EventEmitter<boolean>();
  regionSelector: boolean = false;
  detectorBool: boolean = false;
  detectorInteracted: boolean = false;
  iconSrc: string = "./assets/flags/denmark.svg";
  regions = [
    {
      imgSrc: "./assets/flags/globe.png",
      title: "Rest of World",
      anchor: "#",
      active: false
    },
    {
      imgSrc: "./assets/flags/usa.svg",
      title: "USA",
      anchor: "#",
      active: false
    },
    {
      imgSrc: "./assets/flags/denmark.svg",
      title: "Danmark",
      anchor: "#",
      active: true
    },
    {
      imgSrc: "./assets/flags/german.svg",
      title: "Deutshland",
      anchor: "#",
      active: false
    },
    {
      imgSrc: "./assets/flags/norway.svg",
      title: "Norge",
      anchor: "#",
      active: false
    },
    {
      imgSrc: "./assets/flags/finland.svg",
      title: "Suomi",
      anchor: "#",
      active: false
    },
    {
      imgSrc: "./assets/flags/sweden.svg",
      title: "Sverige",
      anchor: "#",
      active: false
    },
  ];
  interactDetector(event: boolean){
    this.detectorBool = false;
    this.detectorInteracted = event;
    this.regionSelector = !this.regionSelector;
    console.log(event)
  }
  openDetector(){
    if(this.detectorInteracted === false){
      this.detectorBool = !this.detectorBool;
    } else if(this.detectorInteracted === true){
      this.regionSelector = !this.regionSelector;
    }
  }
  showLogin(){
    this.showLoginEvent.emit(true);
  }
}
