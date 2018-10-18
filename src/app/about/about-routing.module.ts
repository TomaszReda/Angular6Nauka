import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoTaskComponent} from '../todo-task/todo-task.component';
import {AboutComponent} from './about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AboutRoutingModule { }
