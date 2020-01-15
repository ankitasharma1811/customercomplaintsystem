import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { firebase } from 'firebaseui-angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

interface User {
  email?: string;
  password?: string;
  confpassword?: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user: User = {
    email: '',
    password: '',
    confpassword: ''
  };
  constructor(public afAuth: AngularFireAuth, private route: Router, public toastController: ToastController) { }

  ngOnInit() {
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Password Mismatch.',
      duration: 2000
    });
    toast.present();
  }
  async signup() {
    if (this.user.password === this.user.confpassword)  {
      const user = await this.afAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password,
      );
      this.route.navigateByUrl('/camera');
    } else {
      this.presentToast();
    }
  }
}
