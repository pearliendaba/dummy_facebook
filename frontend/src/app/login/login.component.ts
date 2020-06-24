import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { User } from 'models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

 

  constructor(private service: PostsService, private router: Router,private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }



 LogUserIn(){
   this.service.login(this.loginForm.value).subscribe(res => {
    localStorage.setItem('user', JSON.stringify(this.loginForm.value))

     console.log(res)
   })
 
 }


}
