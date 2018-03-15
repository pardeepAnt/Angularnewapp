import { PostService } from './../../services/post.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[];
  createPost:any[];
  isUpdate:boolean=false;
  utitle:string;
  ubody:string;
  uid:number;
  updateposts:any[];
  constructor(private service:PostService) {
   


   }
   submiitedForm(form){
    
    let varcheck = {id:1,title:form.value.title,body:form.value.body};
      
    this.service.createPost(form).subscribe(response=>{
     this.posts.splice(0,0,varcheck);
    console.log(this.posts);
      });
      form.reset();
   }
   deletePost(obj){

     let index = this.posts.indexOf(obj);
 
     this.service.deletePost(obj.id).subscribe(response=>{
      this.posts.splice(index,1);
     });
   }
  ngOnInit() {
    this.service.getPost().subscribe(response => {
      
      this.posts = response.json();
    
       });
  }
  changeToUpdate(post){
    this.isUpdate = !this.isUpdate;
    this.utitle = post.title;
    this.ubody  = post.body;
    this.updateposts = post;
  }
  updatePost(form){
 
    let varcheck = {"id":this.updateposts['id'],"title":form.value.title,"body":form.value.body};
    let index    = this.posts.indexOf(this.updateposts);
    
    this.service.updatePost(varcheck).subscribe(response=>{
      
      this.posts[index]= {'id':this.updateposts['id'],'title':form.value.title,'body':form.value.body};
      form.reset();
      this.isUpdate = !this.isUpdate;
      this.updateposts = [];
      });
  }
}
