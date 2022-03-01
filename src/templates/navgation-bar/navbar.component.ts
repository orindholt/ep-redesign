import { Component } from '@angular/core';

import { menuList } from './menulist';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  isShown = false;
  menuList = menuList;
  loggedIn = false;
}
