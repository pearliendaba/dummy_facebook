import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'models/user.model';
import { Subject } from 'rxjs';
import { Post } from 'models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  public postAdded_Observable = new Subject();

  constructor(private http: HttpClient) { }


  //register a user
  registerUser(user){
   return this.http.post('http://localhost:3001/user/signup', user)
  }



  //User Login Validation
  validateLogin(user: User){
		return this.http.post('API HERE!!!!',{
			username : user.username,
			password : user.password
		})
  }
  
  notifyPostAddition(){
		this.postAdded_Observable.next();
  }
  
  getAllPost(){
		return this.http.post('API HERE!!!!',{})
  }
  
  addPost(post: Post){
		return this.http.post('API HERE!!!',{
			title : post.title,
			description : post.description
		})
	}
}
