import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from 'models/post.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

// export interface DialogData {
//   post: string;
// }

export class PostsComponent implements OnInit {

  // declare before constructor
  validatingForm: FormGroup;
  posts: any;
  comment: boolean = true;


   count: number = 0;


  constructor(private service: PostsService, private router: Router) {
    this.getPosts()
  }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      content: new FormControl('', Validators.email)
    });
  }

  get content() {
    return this.validatingForm.get('content');
  }

  //add new post
  newPost() {
    this.service.AddPost(this.validatingForm.value).subscribe(res => {
      this.getPosts()
      swal("New Post", "you have added a post", "success");
      console.log(res);

    })
  }

  //get all posts
  getPosts() {
    this.service.getAllPosts().subscribe(res => {
      this.posts = res;
      console.log(res);
    })
  }


  //delete post
  deletePost(id) {
    this.service.removePost(id).subscribe(res => {
      this.getPosts();
      swal("Deleted post");
      swal("Delete Post", "you have deleted a post", "success");
      console.log(res)
    })
  }

  //getting the comments
  getComment() {
    this.comment = !this.comment;
  }

  


}
