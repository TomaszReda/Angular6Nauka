import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AddTaskComponent} from './add-task.component';
import {GuardService} from '../auth/guard.service';


const appRoutes: Routes = [
  {
    path: '',
    component: AddTaskComponent,
    canActivate: [GuardService]
  },


];


@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AddTaskRoutingModule {
}
