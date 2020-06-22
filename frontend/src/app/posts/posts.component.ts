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

  // declare before constructor
  // count: number = 0;
  // data = '';
  // clicked: boolean = true;
  // posts: any [];
  // public post : Post;
  // dialog: any;
 // @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(private service: PostsService, private router: Router) {
    // this.clickCount()
  }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      post: new FormControl('', Validators.email)
    });
  }

  get post() {
    return this.validatingForm.get('post');
  }

  newPost(){
    console.log(this.validatingForm.value)
  }

  
  // newPost(): void{
  //     const dialogRef = this.dialog.open( {
  //       width: '250px',
  //       data: {post: this.post, }
  //     });
  
  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed');
  //       this.post = result;
  //     });
  //   }
  
  //Getting all posts
  // getAllPost(){
  // 	this.service.getAllPost().subscribe(result => {
  // 		console.log('result is ', result);
  // 		this.posts = result['data'];
  // 	});
  // }

  // addPost() {
  // 	if(this.post.description){
  // 		this.service.addPost(this.post).subscribe(res =>{
  // 			//this.closeBtn.nativeElement.click();
  //       this.service.notifyPostAddition();
  // 		});
  // 	} else {
  // 		alert('Title and Description required');
  // 	}
  // }

  //Counting the number of likes
  // clickCount(): void {
  //   this.count++
  // }



  // getStudent(id) {
  //   this.clicked = false
  //   console.log('comment works');
  // }


  // delete(info: string): void {
  //   this.data += `Text changed to '${info}'\n`;
  // }


}
