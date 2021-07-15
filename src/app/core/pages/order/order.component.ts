import { Component, OnInit } from '@angular/core';
import {HOME_PATH} from '../../../routing/route-paths';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  homePath: any;

  constructor() { }

  ngOnInit(): void {
    this.homePath = HOME_PATH;
  }

}
