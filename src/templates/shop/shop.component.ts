import { Component, Input } from '@angular/core';

import { shopList } from 'src/app/app-shop';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html'
})

export class ShopComponent {
  @Input() shopList: any = shopList;
}
