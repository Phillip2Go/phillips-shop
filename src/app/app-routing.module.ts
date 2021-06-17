import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/pages/home/home.component';

import { HOME_PATH } from './routing/route-paths';

const routes: Routes = [
  { path: HOME_PATH, component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
