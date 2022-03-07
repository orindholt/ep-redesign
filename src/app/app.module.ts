import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../templates/nav-bar/navbar.component';
import { RewardsComponent } from '../components/rewards/rewards.component';
import { WinComponent } from '../components/win-example/win.component';
import { GameComponent } from 'src/components/game-biggest/game.component';
import { FooterComponent } from 'src/templates/footer/footer.component';
import { MenuComponent } from 'src/components/nav-menu/menu.component';
import { NavInComponent } from 'src/components/nav-loggedIn/nav-in.component';
import { PersonSvgComponent } from 'src/templates/dynamic-svg/person-icon';
import { ButtonOrangeComponent } from 'src/components/button-common/button-common.component';
import { RegisterComponent } from 'src/components/register-rewad/register.component';
import { OffersComponent } from 'src/templates/point-offers/offers.component';
import { TournamentsComponent } from 'src/templates/tournaments/tournaments.component';
import { GameSlideComponent } from 'src/components/game-slide/game-slide.component';
import { WelcomeOffersComponent } from 'src/templates/welcome-offers/welcome-offers.component';
import { WelcomeOfferComponent } from 'src/components/welcome-offer/welcome-offer.component';
import { MenuItemComponent } from 'src/components/nav-menu/menu-item.component';
import { ShopComponent } from 'src/templates/shop/shop.component';
import { RegionMenuComponent } from 'src/components/region-menu/region-menu.component';
import { GeoComponent } from 'src/components/geo-popup/geo.component';
import { LoginComponent } from '../components/login/login.component';
import { FrontpageComponent } from '../pages/frontpage/frontpage.component';
import { FrontpageLoggedComponent } from '../pages/frontpage-logged/frontpage-logged.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpBarComponent } from '../components/exp-bar/exp-bar.component';
import { DailyUpdatesComponent } from '../templates/daily-updates/daily-updates.component';
import { UpdateBonusComponent } from '../components/update-bonus/update-bonus.component';
import { ProgressComponent } from '../components/progress/progress.component';
import { PicksComponent } from '../templates/picks/picks.component';
import { ShopItemComponent } from '../components/shop-item/shop-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    RewardsComponent,
    WinComponent,
    GameComponent,
    FooterComponent,
    MenuComponent,
    MenuItemComponent,
    NavInComponent,
    PersonSvgComponent,
    ButtonOrangeComponent,
    RegisterComponent,
    OffersComponent,
    TournamentsComponent,
    GameSlideComponent,
    WelcomeOffersComponent,
    WelcomeOfferComponent,
    ShopComponent,
    RegionMenuComponent,
    GeoComponent,
    LoginComponent,
    FrontpageComponent,
    FrontpageLoggedComponent,
    ExpBarComponent,
    DailyUpdatesComponent,
    UpdateBonusComponent,
    ProgressComponent,
    PicksComponent,
    ShopItemComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
