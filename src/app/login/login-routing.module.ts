import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {LoginComponent} from './login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
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
export class LoginRoutingModule { }
