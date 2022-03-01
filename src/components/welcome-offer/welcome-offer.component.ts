import { Component, Input } from '@angular/core';

@Component({
  selector: 'welcome-offer',
  templateUrl: './welcome-offer.component.html'
})

export class WelcomeOfferComponent {
  @Input() offerObj!: any;
}
