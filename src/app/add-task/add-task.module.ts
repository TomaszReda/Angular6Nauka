import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddTaskRoutingModule} from './/add-task-routing.module';
import {AddTaskComponent} from './add-task.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AddTaskRoutingModule, ReactiveFormsModule
  ],
  declarations: [AddTaskComponent]
})
export class AddTaskModule {
}
