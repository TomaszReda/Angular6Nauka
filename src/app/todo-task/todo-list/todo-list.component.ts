import {Component, OnInit} from '@angular/core';
import {Task} from '../../model/task';
import {TaskService} from '../../service/task.service';
import {HttpService} from '../../service/http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<Task> = new Array<Task>();

  constructor(private taskService: TaskService, private http: HttpService) {
    this.taskService.getTasksListObs().subscribe(x => {
      this.taskList = x.filter(t => t.isDone === false);
    });
  }

  ngOnInit() {

  }

  done(task: Task) {
    this.taskService.done(task);
  }

  remove(task: Task) {
    this.taskService.remove(task);
  }

}
