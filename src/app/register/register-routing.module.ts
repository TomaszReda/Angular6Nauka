import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register.component';
import {RegulaminComponent} from './regulamin/regulamin.component';
import {RegistComponent} from './regist/regist.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      {
        path: 'terms',
        component: RegulaminComponent,
      },
      {
        path: '',
        component: RegistComponent,
      }
    ]
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
export class RegisterRoutingModule {
}
