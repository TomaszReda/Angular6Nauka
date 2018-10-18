import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecretRoutingModule} from './/secret-routing.module';
import {SecretComponent} from './secret.component';
import {Level1Component} from './level1/level1.component';
import {Level2Component} from './level2/level2.component';

@NgModule({
  imports: [
    CommonModule,
    SecretRoutingModule
  ],
  declarations: [SecretComponent,
    Level1Component,
    Level2Component]
})
export class SecretModule {
}
