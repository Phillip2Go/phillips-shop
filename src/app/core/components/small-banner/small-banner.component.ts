import {Component, Input, OnInit} from '@angular/core';

declare var _tagg: any;

@Component({
  selector: 'app-small-banner',
  templateUrl: './small-banner.component.html',
  styleUrls: ['./small-banner.component.scss']
})
export class SmallBannerComponent implements OnInit {
  @Input() data: any = {};
// tslint:disable-next-line:variable-name
  _tagg: any;

  constructor() { }

  ngOnInit(): void {
    this._tagg = _tagg;
  }

  createDataLayer(): void {
    try{
      _tagg.push({
        contentType: this.data.adType,
        contentTitle: this.data.title,
        eventName: 'eventTrack',
        eventType: 'click',
        eventTag: this.data.tag
      });
    } catch (e) {
      console.log('Got an error!', e);
    }
  }
}