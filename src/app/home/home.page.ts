import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { firebase } from 'firebaseui-angular';

interface User {
    email?: string;
    password?: string;
  }
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User = {
    email: '',
    password: ''
  };
  constructor(public afAuth: AngularFireAuth, private route: Router) {}
  checkAuth() {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.route.navigateByUrl('/camera');
      } else {
        this.route.navigateByUrl('/home');
      }
    });
  }
  async signIn() {
    const user = await this.afAuth.auth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password,
    );
    this.checkAuth();
  }
}
