import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'geo-popup',
  templateUrl: './geo.component.html'
})
export class GeoComponent {
  @Input() regionBool: any;
  @Output() showDropdown = new EventEmitter<boolean>();
  toggleDropdown(){
    this.regionBool = true;
    this.showDropdown.emit(this.regionBool)
  }
  location: string = "Kastrup, Denmark";
}
