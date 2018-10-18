import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoneTaskRoutingModule} from './/done-task-routing.module';
import {DoneTaskComponent} from './done-task.component';
import {DateDirective} from '../shared/date.directive';
import {CheckedDirective} from '../shared/checked.directive';

@NgModule({
  imports: [
    CommonModule,
    DoneTaskRoutingModule,

  ],
  declarations: [
    DoneTaskComponent,
    DateDirective,
    CheckedDirective
  ]
})
export class DoneTaskModule {
}
