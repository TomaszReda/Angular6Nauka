import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public message: string;

  constructor(public authh: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(x => {
      console.log(x);
      if (x['name']) {
        this.message = x['name'];
      }
    });
  }

  onSubmit(form: NgForm) {
    this.authh.login(form.value.email, form.value.password);
  }
}
