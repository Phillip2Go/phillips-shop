import {Component, Input, OnInit} from '@angular/core';
import {DETAIL_PATH} from '../../../routing/route-paths';

declare var _tagg: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() items: any = [];
// tslint:disable-next-line:variable-name
  _tagg: any;
  detailPath: any;

  constructor() { }

  ngOnInit(): void {
    this._tagg = _tagg;
    this.detailPath = DETAIL_PATH;
  }

  createDataLayer(type: any, title: any, tag: any): void {
    try{
      _tagg.push({
        contentType: type,
        contentTitle: title,
        eventName: 'eventTrack',
        eventType: 'click',
        eventTag: tag
      });
    } catch (e) {
      console.log('Got an error!', e);
    }
  }
}
