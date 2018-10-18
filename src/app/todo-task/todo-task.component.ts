import {Component, OnInit} from '@angular/core';
import {Task} from '../model/task';
import {TaskService} from '../service/task.service';
import {HttpService} from '../service/http.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  ngOnInit(): void {
  }

}
