import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  loadstatus='recipe';
   ngOnInit()
   {
     firebase.initializeApp({
      apiKey: "AIzaSyDtYvxDgetgl8VRkNjIGLtHX-4N5_uWdxY",
      authDomain: "ng-recipe-book-dc4c7.firebaseapp.com"
     });
   }
  
  onNavigate(feature:string){
    this.loadstatus=feature;
  }
  
}
