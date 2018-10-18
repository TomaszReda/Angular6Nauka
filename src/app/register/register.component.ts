import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authh: AuthService) {
  }

  ngOnInit(){}

  onSubmit(form: NgForm) {
    this.authh.register(form.value.email, form.value.password);
  }

}
