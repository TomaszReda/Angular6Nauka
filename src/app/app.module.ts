import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HttpClientModule} from '@angular/common/http';


const config = {
  apiKey: 'AIzaSyA19fqr1Mis7kunAcsUJnMt4hldwFQPySc',
  authDomain: 'angular6testproject.firebaseapp.com',
  databaseURL: 'https://angular6testproject.firebaseio.com',
  projectId: 'angular6testproject',
  storageBucket: 'angular6testproject.appspot.com',
  messagingSenderId: '619364583908'
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

