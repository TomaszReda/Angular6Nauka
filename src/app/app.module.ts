import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DoneTaskComponent} from './done-task/done-task.component';
import {TodoTaskComponent} from './todo-task/todo-task.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {SecretComponent} from './secret/secret.component';
import {Level1Component} from './secret/level1/level1.component';
import {Level2Component} from './secret/level2/level2.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {HttpClientModule} from '@angular/common/http';


const config = {
  apiKey: 'AIzaSyAvKyGAxo-6al5t5lOLJWOck-KrO1d8qSQ',
  authDomain: 'testowyproject-678a0.firebaseapp.com',
  databaseURL: 'https://testowyproject-678a0.firebaseio.com',
  projectId: 'testowyproject-678a0',
  storageBucket: 'testowyproject-678a0.appspot.com',
  messagingSenderId: '233391564966'
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

