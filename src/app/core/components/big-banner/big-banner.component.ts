import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DETAIL_PATH} from '../../../routing/route-paths';

declare var _tagg: any;

@Component({
  selector: 'app-big-banner',
  templateUrl: './big-banner.component.html',
  styleUrls: ['./big-banner.component.scss']
})
export class BigBannerComponent implements OnInit {
  @Input() data: any = {};
  // tslint:disable-next-line:variable-name
  _tagg: any;
  detailPath: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this._tagg = _tagg;
    this.detailPath = DETAIL_PATH;
  }

  goToComponentB(): void {
    this.router.navigate([DETAIL_PATH]);
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
