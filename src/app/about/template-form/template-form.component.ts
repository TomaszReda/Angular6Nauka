import {Component, OnInit, ViewChild} from '@angular/core';
import {Forms} from '../../model/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  public form: Forms = new Forms();

  @ViewChild('heroForm')
  private forms: NgForm;

  constructor() {

  }

  ngOnInit() {
    this.form.age = '1-15';
    this.form.gender = true;
  }

  onSubmit() {
    this.reset();

  }

  reset() {
    this.forms.resetForm({age: '1-15', gender: true});
  }
}
