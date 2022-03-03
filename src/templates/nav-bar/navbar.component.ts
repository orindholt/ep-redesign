import { Component } from '@angular/core';

import { menuList } from './menulist';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  isShown: boolean = false;
  menuList = menuList;
  loggedIn: boolean = false;
  showLogin: boolean = false;
  toggleMenu(){
    this.isShown = !this.isShown;
    this.isShown === false && menuList.forEach(element => {
      if(element.dropdown !== undefined) element.dropdown.shown = false;
    });
  }
  toggleLogin(event: boolean){
    this.showLogin = event;
    if(this.isShown === true) this.isShown = false;
  }
}
