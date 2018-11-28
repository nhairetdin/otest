import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable()
export class AuthProvider {

  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
  // this function receives email and password from the login form, and return true if successful
  async login(email, password) {
    if (!email || !password) {
      return false
    }

    let success = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log("logged id")
        return true
      })
      .catch(error => {
        console.log("failed")
        return false
      })

    return success
  }
  // this function also receives email and password from the login form, and return true if successful
  // but instead of logging in, register
  async register(email, password) {
    if (!email || !password) {
      return false
    }

    let success = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        return true
      })
      .catch(error => {
        return false
      })
    
    return success
  }

}
