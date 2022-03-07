import { Component, Input} from '@angular/core';

@Component({
  selector: 'shop-item',
  templateUrl: './shop-item.component.html',
})
export class ShopItemComponent {
  @Input() shopItem!: any;
  @Input() background: string = "";
}
