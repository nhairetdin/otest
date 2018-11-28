import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth'

import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email: string;
  password: string;

  constructor(public auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
  // if new account is created succesfully, returning true, pass user in to TabsPage
  async createAccount() {
    if (await this.auth.register(this.email, this.password)) {
      this.navCtrl.push(TabsPage)
    } else {
      console.log("register failed")
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
