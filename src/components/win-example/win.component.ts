import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'win-example',
  templateUrl: './win.component.html'
})
export class WinComponent implements OnInit {
  @ViewChild("card") cardElement!: ElementRef;
  winAmount: string = "1800";
  imgSrc: string = "./assets/user-icon.svg";
  username: string = "Daniel44";
  index: number = 0;
  wins = [
    {
      imgSrc: "./assets/user-icon.svg",
      username: "Daniel44",
      winAmount: "1800",
    },
    {
      imgSrc: "./assets/user-icon.svg",
      username: "Mark1234",
      winAmount: "2000",
    },
    {
      imgSrc: "./assets/user-icon.svg",
      username: "Nick201",
      winAmount: "6200",
    },
    {
      imgSrc: "./assets/user-icon.svg",
      username: "Bot002",
      winAmount: "9400",
    },
  ]
  ngOnInit(): void {
    setInterval(()=>{
      if(this.index < this.wins.length-1){
        this.index++;
      } else this.index = 0;
      this.cardElement.nativeElement.classList.toggle("rotate");
      this.wins.forEach(win => {
        if(this.wins.indexOf(win) === this.index){
          setTimeout(()=>{
            this.imgSrc = win.imgSrc;
            this.username = win.username;
            this.winAmount = win.winAmount;
          }, 500);
        }
      });
    }, 6000);
  }
}
