import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-menu',
  templateUrl: './menu.component.html'
})

export class MenuComponent {
  @Input() isShown: any;
  @Input() menuList: any;
}
