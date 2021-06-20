import {Component, Injectable, Input, OnInit} from '@angular/core';
import { PhillipsCmsService } from '../../service/phillips-cms.service';

// import {getTest} from './../../../../../../../notagg/no.tagg_v0_1/src/dist/notagg.js';
declare var _tagg: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userProducts$: any = [];
  products$: any = [];
  ads$: any = [];
  carouselAds: any = [];
  itemBannerAds: any = [];
  smallBannerAds: any = [];
  bigBannerAds: any = [];
  specialBannerAds: any = [];
  // tslint:disable-next-line:variable-name
  _tagg: any;

  constructor(private cmsService: PhillipsCmsService) { }

  ngOnInit(): void {
    this._tagg = _tagg;
    this._tagg.init();
    this.fetchUserProducts(4, this._tagg.getCookieUserId('_taggUserId'));
    this.fetchRandomAmountProducts(8);
    this.fetchAds();
  }
  fetchUserProducts(amount: number, userId: string): void {
    this.cmsService.fetchUserProducts(amount, userId).subscribe(
      response => {
        // console.log('fetchProducts()', response);
        this.userProducts$ = response;
      }
    );
  }
  fetchRandomAmountProducts(amount: number): void {
    this.cmsService.fetchRandomAmoundProducts(amount).subscribe(
      response => {
        // console.log('fetchProducts()', response);
        this.products$ = response;
      }
    );
  }
  fetchProducts(): void {
    this.cmsService.fetchProducts().subscribe(
      response => {
        // console.log('fetchProducts()', response);
        this.products$ = response;
      }
    );
  }
  fetchAds(): void {
    this.cmsService.fetchAds().subscribe(
      response => {
        // console.log('fetchAds()', response);
        this.ads$ = response;
        this.getCarouselAds();
        this.getItemBannerAds();
        this.getSmallBannerAds();
        this.getBigBannerAds();
        this.getSpecialBannerAds();
      }
    );
  }
  getCarouselAds(): void {
    for (const ad of this.ads$) {
      if (ad.adType === 'carousel') {
        this.carouselAds.push(ad);
      }
    }
  }
  getItemBannerAds(): void {
    for (const ad of this.ads$) {
      if (ad.adType === 'item-banner') {
        this.itemBannerAds.push(ad);
      }
    }
  }
  getSmallBannerAds(): void {
    for (const ad of this.ads$) {
      if (ad.adType === 'small-banner') {
        this.smallBannerAds.push(ad);
      }
    }
  }
  getBigBannerAds(): void {
    for (const ad of this.ads$) {
      if (ad.adType === 'big-banner') {
        this.bigBannerAds.push(ad);
      }
    }
  }
  getSpecialBannerAds(): void {
    for (const ad of this.ads$) {
      if (ad.adType === 'special-banner') {
        this.specialBannerAds.push(ad);
      }
    }
  }
}
