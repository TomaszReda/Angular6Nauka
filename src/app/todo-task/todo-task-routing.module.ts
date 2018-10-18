import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AddTaskComponent} from '../add-task/add-task.component';
import {TodoTaskComponent} from './todo-task.component';
import {GuardService} from '../auth/guard.service';
import {DetailsComponent} from './details/details.component';
import {TodoListComponent} from './todo-list/todo-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TodoTaskComponent,
    canActivate: [GuardService],
    children: [
      {
        path: ':id',
        component: DetailsComponent
      },
      {
        path: '',
        component: TodoListComponent
      }
    ]
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
export class TodoTaskRoutingModule {
}
