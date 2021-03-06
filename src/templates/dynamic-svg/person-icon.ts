import { Component, Input } from '@angular/core';

@Component({
  selector: 'person-svg',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="8.251" height="9.174" viewBox="0 0 8.251 9.174">
      <path id="Union_1" data-name="Union 1" d="M.418,8.174A.365.365,0,0,1,.1,8.048a.416.416,0,0,1-.089-.21A4.1,4.1,0,0,1,.278,6.013a3.659,3.659,0,0,1,1.938-2c.019-.008.037-.019.067-.032A2.272,2.272,0,0,1,2.051.694,2.154,2.154,0,0,1,3.631,0h0a2.13,2.13,0,0,1,1.51.627,2.272,2.272,0,0,1-.158,3.354.322.322,0,0,0,.059.032A3.64,3.64,0,0,1,7.208,6.855a6.186,6.186,0,0,1,.043.98.346.346,0,0,1-.312.334.552.552,0,0,1-.094.005Z" transform="translate(0.5 0.5)" [attr.fill]="fillColor" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/>
    </svg>
  `
})
export class PersonSvgComponent {
  @Input() fillColor!: string;
}
