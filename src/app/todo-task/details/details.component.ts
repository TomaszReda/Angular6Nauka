import {Component, OnInit} from '@angular/core';
import {Task} from '../../model/task';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../../service/http.service';
import {TaskService} from '../../service/task.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private task: Task = new Task();

  constructor(private  router: ActivatedRoute, private taskService: TaskService) {
  }

  ngOnInit() {
    this.router.params.subscribe(x => {
      if (x['id']) {
        this.taskService.getOne(x['id']).subscribe(a => {
          this.task = a;
        });
      }
    });
  }

}
