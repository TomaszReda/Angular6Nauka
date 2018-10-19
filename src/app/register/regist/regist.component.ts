import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  constructor(public authh: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authh.register(form.value.email, form.value.password);
  }

}
