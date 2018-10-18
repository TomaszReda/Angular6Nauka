import {Component, OnInit} from '@angular/core';
import {Task} from '../model/task';
import {TaskService} from '../service/task.service';
import {HttpService} from '../service/http.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  public taskList: Array<Task> = new Array<Task>();

  constructor(private taskService: TaskService, private http: HttpService) {
    this.taskService.getTasksListObs().subscribe(x => {
      this.taskList = x.filter(t => t.isDone === true);
    });
  }


  ngOnInit() {
  }

}
