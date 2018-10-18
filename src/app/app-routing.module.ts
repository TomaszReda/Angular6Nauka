import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeModule} from './home/home.module';


const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'add',
    loadChildren: './add-task/add-task.module#AddTaskModule',
  },
  {
    path: 'done',
    loadChildren: './done-task/done-task.module#DoneTaskModule',
  },
  {
    path: 'toDo',
    loadChildren: './todo-task/todo-task.module#TodoTaskModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'secret',
    loadChildren: './secret/secret.module#SecretModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'page-not-found',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
  }

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)

  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
