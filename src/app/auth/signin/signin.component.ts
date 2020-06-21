import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private authservice:AuthService) { }

  ngOnInit(): void {
  }
  onSignin(form :NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authservice.signinUser(email,password);
    form.reset();
    
  }

}
