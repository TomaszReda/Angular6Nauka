import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HttpClientModule} from '@angular/common/http';


const config = {
  apiKey: 'AIzaSyAuOnhe8eLq9HPexK2a8feAMWu5qgI0Q2k',
  authDomain: 'angular6test-9b836.firebaseapp.com',
  databaseURL: 'https://angular6test-9b836.firebaseio.com',
  projectId: 'angular6test-9b836',
  storageBucket: 'angular6test-9b836.appspot.com',
  messagingSenderId: '927695141568'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

