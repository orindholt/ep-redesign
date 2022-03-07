import { Component, Input } from '@angular/core';
import { shopList } from 'src/app/app-shop';

const newList = (()=>{
  let array: any = [];
  shopList.forEach((item, i) => {
    if(i < 3) array.push(item);
  });
  return array;
});

@Component({
  selector: 'picks',
  templateUrl: './picks.component.html',
})

export class PicksComponent {
  @Input() shopList: any = newList();
}
