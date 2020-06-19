import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { User } from 'models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // the module expoted from backend () user.js
   public user : User;

  constructor(private service: PostsService, private router: Router) {
    this.user = new User();
}

  ngOnInit() {
    
  }

  validateLogin() {
    if(this.user.username && this.user.password) {
        this.service.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'success') {
          this.router.navigate(['/post']);
        } else {
          alert('Wrong email or password');
        }
         
      }, error => {
        console.log('error is ', error);
      });
    } else {
        alert('enter email and password');
    }
  }

}
