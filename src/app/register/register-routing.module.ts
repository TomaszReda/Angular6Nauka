import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {RegisterComponent} from './register.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent
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
export class RegisterRoutingModule { }
