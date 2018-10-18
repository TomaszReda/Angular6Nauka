import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SecretComponent} from './secret.component';
import {Level1Component} from './level1/level1.component';
import {Level2Component} from './level2/level2.component';
import {GuardService} from '../auth/guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: SecretComponent,
    canActivateChild: [GuardService],
    children: [
      {
        path: 'level1',
        component: Level1Component
      },
      {
        path: 'level2',
        component: Level2Component
      }
    ]
  },


];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class SecretRoutingModule {
}
