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
   return this.http.post('http://localhost:3000/user/signup', user)
  }

  //login
  login(user){
    return this.http.post('http://localhost:3000/user/login', user)
   }

   //add post
   AddPost(post){
    return this.http.post('http://localhost:3000/post' ,post );
  }
  
  getAllPosts(){
		return this.http.get('http://localhost:3000/post');
  }
  
 
}
