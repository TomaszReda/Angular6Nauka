import {Injectable, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  public user: User = null;
  public message: string;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    _firebaseAuth.authState.subscribe((x: User) => {
      this.user = x;
      console.log(x);
    });
  }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    this._firebaseAuth.auth.signInWithEmailAndPassword(email, password).then((x: UserCredential) => {
        this.message = null;
        this.router.navigate(['']);
      }
    ).catch(x => {
      this.message = x;
      console.log(this.message);
    });
  }

  register(email: string, password: string) {
    this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then(x => {
        this.message = null;

        this.router.navigate(['']);
      }
    ).catch(x => {
      this.message = x;
      console.log(this.message);
    });
    ;
  }

  logout() {
    this._firebaseAuth.auth.signOut().then(x => {
      this.router.navigate(['']);
    });
  }


}
