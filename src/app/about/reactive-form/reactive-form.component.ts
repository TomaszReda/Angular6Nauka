import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Forms} from '../../model/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public forms: FormGroup;

  private form: Forms = new Forms();

  constructor() {
    this.forms = new FormGroup({
      e_mail: new FormControl(null, [Validators.required]),
      age: new FormControl('31-45', [Validators.required]),
      question: new FormArray([new FormControl(null)], [this.identityRevealedValidator])

    })
    ;
  }

  ngOnInit() {
  }

  initForms() {
    this.forms = new FormGroup({
      e_mail: new FormControl(null, [Validators.required]),
      age: new FormControl('31-45', [Validators.required]),
      question: new FormArray([new FormControl(null)], this.identityRevealedValidator)

    })
    ;
  }

  onSubmit() {
    const tmp: Array<string> = <[string]> this.forms.get('question').value;
    this.form.question = tmp;
  }

  get Question() {
    return this.forms.get('question') as FormArray;
  }

  addQuestion() {
    this.Question.push(new FormControl(null));
  }

  reset() {
    this.initForms();
  }


  identityRevealedValidator (control: AbstractControl): ValidationErrors  {
    const question: Array<String> = <[string]> control.value;

    question.forEach(x => {
      if (x === 'kurde') {
        return {badWord: true};
      }

    });
    return null;
  }

}


