import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { firebase } from 'firebaseui-angular';
import { Router } from '@angular/router';

interface User {
    email?: string;
    password?: string;
  }
@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  error: any;
  user: User = {
    email: ''
  };
  constructor(public afAuth: AngularFireAuth, private route: Router) { }

  ngOnInit() {
  }
  recover() {
    this.afAuth.auth.sendPasswordResetEmail(this.user.email)
      .then(data => {
        console.log(data);
        this.route.navigateByUrl('/home');
      })
      .catch(err => {
        this.error = err.message;
        console.log(` failed ${err}`);
      });
  }
}
