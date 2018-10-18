import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {PageNotFoundComponent} from './page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent
  },


];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PageNotFoundRoutingModule {
}
