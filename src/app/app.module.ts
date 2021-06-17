import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CarouselComponent } from './core/components/carousel/carousel.component';
import { ShopItemComponent } from './core/components/shop-item/shop-item.component';
import { SmallBannerComponent } from './core/components/small-banner/small-banner.component';
import { BigBannerComponent } from './core/components/big-banner/big-banner.component';
import { ItemBannerComponent } from './core/components/item-banner/item-banner.component';
import { SpecialBannerComponent } from './core/components/special-banner/special-banner.component';
import {HttpClientModule} from '@angular/common/http';
import {PhillipsCmsService} from './core/service/phillips-cms.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    ShopItemComponent,
    SmallBannerComponent,
    BigBannerComponent,
    ItemBannerComponent,
    SpecialBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PhillipsCmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
