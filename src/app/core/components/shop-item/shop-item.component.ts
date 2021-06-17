import {Component, Input, OnInit} from '@angular/core';

declare var _tagg: any;

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  @Input() data: any = {};
// tslint:disable-next-line:variable-name
  _tagg: any;

  constructor() { }

  ngOnInit(): void {
    this._tagg = _tagg;
  }

  createDataLayer(): void {
    console.log('product-item', this.data);
    try{
      _tagg.push({
        contentType: 'product-item',
        contentName: this.data.trackname,
        // contentName: this.data.artist + '_' + this.data.trackname + '_' + this.data.tag,
        contentTitle: this.data.trackname,
        contentTag: this.data.tag,
        eventName: 'productBuy',
        eventType: 'click'
      });
    } catch (e) {
      console.log('Got an error!', e);
    }
  }
}
