import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoTaskComponent} from './todo-task.component';
import { TodoTaskRoutingModule } from './/todo-task-routing.module';
import { DetailsComponent } from './details/details.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    TodoTaskRoutingModule
  ],
  declarations: [
    TodoTaskComponent,
    DetailsComponent,
    TodoListComponent,
  ]
})
export class TodoTaskModule { }
