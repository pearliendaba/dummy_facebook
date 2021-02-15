import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';


 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
  export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private service:PostsService, private formBuilder: FormBuilder, private router: Router) {
    
   }


  AddUser(){
    this.service.registerUser(this.registerForm.value).subscribe(res =>{
   
      console.log(res)
    
    })
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }


}
