import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import {Router } from '@angular/router';

@Injectable()
export class AuthService {
 token: string;
  constructor(private router:Router) { }
  signupUser(email:string,password:string)
  {
      firebase.auth().createUserWithEmailAndPassword(email,password).
      catch(
        error => console.log(error)
      )
  }
  signinUser(email:string,password:string)
  {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
        .then(
          (token:string) => this.token = token
          
        )
        console.log(this.token);
      }
      
    ).catch(
      error => console.log(error)
    )
   
  }
  getToken(){
   firebase.auth().currentUser.getIdToken().then(
      
      (token:string) => this.token = token
    );
    console.log(this.token);
    return this.token;
  }
  isAuthenticated(){
    return this.token != null;
  }
  signOut()
  {
    firebase.auth().signOut();
    this.token = null;
  }
}
