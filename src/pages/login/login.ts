import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth'

import { TabsPage } from '../tabs/tabs'
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  constructor(public auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
  // open register-page
  openRegisterPage() {
    this.navCtrl.push(RegisterPage)
  }
  // if signin returns true, go to TabsPage which is the root for the rest pages
  async signIn() {
    //this.navCtrl.push(TabsPage);
    if (await this.auth.login(this.email, this.password)) {
      this.navCtrl.push(TabsPage);
    } else {
      console.log("failed to login")
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
