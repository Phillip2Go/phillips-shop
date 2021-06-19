import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PhillipsCmsService} from '../../service/phillips-cms.service';
import {HOME_PATH} from '../../../routing/route-paths';

declare var _tagg: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  _tagg: any;
  data: any = {};
  userProducts$: any = [];
  homePath: any;

  constructor(private cmsService: PhillipsCmsService) { }

  ngOnInit(): void {
    this.homePath = HOME_PATH;
    this._tagg = _tagg;
    this.data = history.state.data;
    this.fetchUserProducts(4, this._tagg.getCookieUserId('_taggUserId'));
  }
  fetchUserProducts(amount: number, userId: string): void {
    this.cmsService.fetchUserProducts(amount, userId).subscribe(
      response => {
        // console.log('fetchProducts()', response);
        this.userProducts$ = response;
      }
    );
  }
}
