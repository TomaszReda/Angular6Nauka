import {Injectable} from '@angular/core';
import {Task} from '../model/task';
import {AuthService} from '../auth/auth.service';
import {HttpService} from './http.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService, private authService: AuthService) {
    this.init();
  }

  init() {
    this.httpService.getTask().subscribe((list: Array<Task>) => {
      this.tasksListObs.next(list);
    });
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getOne(id: string) {
    return this.httpService.getOne(id);
  }

  addTasks(list: Array<string>) {
    const taskList: Array<Task> = this.createTaskList(list);
    this.httpService.saveTasks(taskList).subscribe((x: Array<Task>) => {
      console.log(x);
    });

    this.httpService.getTask().subscribe(x => {
      this.tasksListObs.next(x);
    });
  }

  done(t: Task) {
    let tmp = this.tasksListObs.getValue();
    tmp = tmp.filter(x => x !== t);
    t.isDone = true;
    t.dateEnd = new Date().toLocaleDateString() + new Date().toLocaleTimeString();
    this.httpService.saveTask(t);
    tmp.push(t);
    console.log(t);
    this.tasksListObs.next(tmp);
  }

  remove(task: Task) {
    this.httpService.remove(task._id.$oid).subscribe(x => {
      console.log(x);
    });

    this.tasksListObs.next(this.tasksListObs.getValue().filter(x => x !== task));
  }


  createTaskList(list: Array<string>) {
    const taskList: Array<Task> = new Array<Task>();
    list.forEach(x => {
      const tmp = new Task();
      tmp.name = x;
      tmp.isDone = false;
      tmp.dateCreate = new Date().toLocaleDateString() + new Date().toLocaleTimeString();
      tmp.userId = this.authService.user.uid;
      taskList.push(tmp);
    });
    return taskList;
  }
}
