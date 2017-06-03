import{Component} from '@angular/core';
import{PostService} from './post.service';


@Component({
	selector : 'posts',
	template :`
	<div class="container">
	<h1>My Blog Posts</h1>
	 <br>
	 <div>
	<label>Title:</label>
	<input class="form-control" type="text" [(ngModel)]="title"/><br>
	<label>Body :</label>
	<input  class="form-control" type="text" [(ngModel)]="body" /><br>
	<input class="btn btn-primary" type="button" (click)="addNewPost()" value="add post" />
	 </div>
	 <div class="container">
	 <ul *ngFor="let post of posts"> 
	   <li><b>{{post.title}}</b></li>
	    <li>{{post.body}}</li>
	 </ul>
	 </div>
		</div>

	          `

})
export class PostComponent{
	private posts :any[];
	private title :string;
	private body :string ;
	private newPost :any;
	constructor(private _postService : PostService){ //Dependency Injection

		this._postService.getPosts().subscribe(response =>{
			this.posts=response

		});

	}

	/*addNewPost(){
		//console.log("hey you clicked me")
		this.newPost={
			title :this.title,
			body :this.body
      }
      console.log(this.newPost)
    //  this._postService.addPost(this.newPost)
      
	}*/

}