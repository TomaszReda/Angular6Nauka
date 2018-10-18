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
  apiKey: 'AIzaSyAA5ZK2wkFwTK5wAKxrTz4gV9daWOF407g',
  authDomain: 'testowyprojekt-73e6f.firebaseapp.com',
  databaseURL: 'https://testowyprojekt-73e6f.firebaseio.com',
  projectId: 'testowyprojekt-73e6f',
  storageBucket: 'testowyprojekt-73e6f.appspot.com',
  messagingSenderId: '661496189963'
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

