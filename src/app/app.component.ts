import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TestowyProjekt';



  constructor(public authh: AuthService) {

  }

  logout() {
    this.authh.logout();
  }

  ngOnInit(): void {
  }


}
