import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/pages/home/home.component';

import {DETAIL_PATH, HOME_PATH, ORDER_PATH} from './routing/route-paths';
import {DetailComponent} from './core/pages/detail/detail.component';
import {OrderComponent} from './core/pages/order/order.component';

const routes: Routes = [
  { path: HOME_PATH, component: HomeComponent},
  { path: DETAIL_PATH, component: DetailComponent},
  { path: ORDER_PATH, component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
