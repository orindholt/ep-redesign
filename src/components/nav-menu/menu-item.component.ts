import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html'
})

export class MenuItemComponent {
  @Input() item: any;
  toggleDropdown(){
    this.item.dropdown.shown = !this.item.dropdown.shown
  }
}
