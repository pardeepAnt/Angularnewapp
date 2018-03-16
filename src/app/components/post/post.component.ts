import { PostService } from './../../services/post.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs/Observer';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';

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
    
    let varcheck = {id:1,title:form.value.ctitle,body:form.value.cbody};
    let sendData     = {"title":form.value.ctitle,"body":form.value.cbody};
    this.service.create('post/create-post',sendData).subscribe(response=>{
     this.posts.splice(0,0,varcheck);
    console.log(this.posts);
      });
      form.reset();
   }
   deletePost(obj){

     let index = this.posts.indexOf(obj);
     
     this.service.delete("post/delete?id="+obj.id,obj.id).subscribe(response=>{
      this.posts.splice(index,1);
     },(error:AppError)=>{
      if(error instanceof NotFoundError)
       alert("Your post is already been deleted");
     alert("not found error");
    });
   }
  ngOnInit() {
    this.service.getAll('post/get-post').subscribe(response => {
      
      this.posts = response.json();
    
       },(error:AppError)=>{
         if(error instanceof NotFoundError)
          alert("Your post is already been deleted");
        alert("not found error");
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
    
    this.service.update('post/update-post',varcheck).subscribe(response=>{
      
      this.posts[index]= {'id':this.updateposts['id'],'title':form.value.title,'body':form.value.body};
      form.reset();
      this.isUpdate = !this.isUpdate;
      this.updateposts = [];
      },(error:AppError)=>{
        if(error instanceof NotFoundError)
         alert("Your post is already been deleted");
       alert("not found error");
      });
  }
 
}
