import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './/about-routing.module';
import {AboutComponent} from './about.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AboutComponent, ReactiveFormComponent, TemplateFormComponent,]
})
export class AboutModule { }
