import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {TaskService} from '../service/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public form: FormGroup;

  constructor(private taskService: TaskService) {
    this.initForms();
  }

  initForms() {
    this.form = new FormGroup({
      taskName: new FormArray([new FormControl('')])
    });
  }

  get taskName() {
    return this.form.get('taskName') as FormArray;
  }

  addTaskName() {
    this.taskName.push(new FormControl(''));
  }

  ngOnInit() {
  }


  onSubmit() {
    this.taskService.addTasks(<[string]> this.taskName.value);
    this.initForms();
  }


  reset() {
    this.initForms();

  }
}
