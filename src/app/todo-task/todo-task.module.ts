import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoTaskComponent} from './todo-task.component';
import { TodoTaskRoutingModule } from './/todo-task-routing.module';
import { DetailsComponent } from './details/details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {SortPipe} from '../shared/sort.pipe';
import {TransformTaskPipe} from '../shared/transform-task.pipe';

@NgModule({
  imports: [
    CommonModule,
    TodoTaskRoutingModule
  ],
  declarations: [
    TodoTaskComponent,
    DetailsComponent,
    TodoListComponent,
    SortPipe,
    TransformTaskPipe
  ]
})
export class TodoTaskModule { }
