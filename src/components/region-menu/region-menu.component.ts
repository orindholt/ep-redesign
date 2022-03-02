import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'region-menu',
  templateUrl: './region-menu.component.html'
})

export class RegionMenuComponent {
  @Input() regions!: Array<any>;
  @Output() regionEvent = new EventEmitter<string>();
  regionToggle(crtRegion: any){
    this.regions.forEach(region => {
      region.active = false;
    });
    crtRegion.active = true;
    this.regionEvent.emit(crtRegion.imgSrc);
  }
}
