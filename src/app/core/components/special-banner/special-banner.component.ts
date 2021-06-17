import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-special-banner',
  templateUrl: './special-banner.component.html',
  styleUrls: ['./special-banner.component.scss']
})
export class SpecialBannerComponent implements OnInit {
  @Input() data: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
