import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './/register-routing.module';
import {RegisterComponent} from './register.component';
import {FormsModule} from '@angular/forms';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { RegistComponent } from './regist/regist.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule
  ],
  declarations: [RegisterComponent, RegulaminComponent, RegistComponent]
})
export class RegisterModule { }
