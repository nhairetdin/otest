import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable()
export class AuthProvider {

  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  async login(email, password) {
    console.log(email, password)
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

  async register(email, password) {
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
