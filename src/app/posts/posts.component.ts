import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { from } from 'rxjs';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts : any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    this.http.get(this.url).subscribe(res=>{
      console.log(res.json());
      this.posts = res.json();
    })
   }
   createPost(title: HTMLInputElement){
     let post = {title : title.value};
    this.http.post(this.url, JSON.stringify(post)).subscribe(res=>{
      console.log(res.json());
    })
   }

   updatePost(post){
     this.http.put(`${this.url}/${post.id}`, JSON.stringify(post))
     .subscribe(response=>{
       console.log(response.json());
     })
   }

   deletePost(post){
    this.http.delete(`${this.url}/${post.id}`)
    .subscribe(response=>{
      console.log(response.json());
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    })
   }

}
