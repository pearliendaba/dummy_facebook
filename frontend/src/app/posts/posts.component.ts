import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from 'models/post.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

// export interface DialogData {
//   post: string;
// }

export class PostsComponent implements OnInit {
  validatingForm: FormGroup;
  posts:any;

  // declare before constructor
  // count: number = 0;
  // data = '';
  // clicked: boolean = true;
  // posts: any [];
  // public post : Post;
  // dialog: any;
 // @ViewChild('closeBtn') closeBtn: ElementRef;

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

  newPost(){
    this.service.AddPost(this.validatingForm.value).subscribe(res =>{
      console.log(res);
    })
  }

  getPosts(){
    this.service.getAllPosts().subscribe(res => {
      this.posts = res ;
      console.log(res);
    })
  }
  
  //Counting the number of likes
  // clickCount(): void {
  //   this.count++
  // }





}
