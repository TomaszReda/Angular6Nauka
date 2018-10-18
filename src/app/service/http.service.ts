import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Task} from '../model/task';
import {Observable} from 'rxjs';
import {stringDistance} from 'codelyzer/util/utils';
import {environment} from '../../environments/environment';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly URL = environment.database;
  readonly param = new HttpParams().set('apiKey', 'c0Sfq067EXakIN_FhNEquGh6WNgUipfJ');


  constructor(private httpClient: HttpClient, private auth: AuthService) {
    this.getTask().subscribe(x => {

    });
  }

  params() {
    const query = {'userId': this.auth.user.uid};
    const param = new HttpParams().set('apiKey', 'c0Sfq067EXakIN_FhNEquGh6WNgUipfJ').append('q', JSON.stringify(query));
    return param;
  }

  getTask(): Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>(this.URL, {params: this.params()});
  }

  saveTasks(taskList: Array<Task>): Observable<Array<Task>> {
    return this.httpClient.post<Array<Task>>(this.URL, taskList, {params: this.param});
  }

  saveTask(task: Task) {
    const taskId: string = <string> task._id.$oid;
    const url = environment.database + '/' + taskId;
    return this.httpClient.put(url, task, {params: this.param}).subscribe(
      x => console.log(x)
    );
  }

  getOne(id: string): Observable<Task> {
    return this.httpClient.get<Task>(this.URL + '/' + id, {params: this.param});
  }

  remove(taskId: string) {
    const url = environment.database + '/' + taskId;
    return this.httpClient.delete(url, {params: this.param});
  }
}
