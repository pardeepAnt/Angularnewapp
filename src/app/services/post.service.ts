import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

  constructor(private http:Http) { }
  getPost(){
  return this.http.get(environment.apiUrl+"post/get-post");
 }
  createPost(post){
     let data = {"title":post.value.ctitle,"body":post.value.cbody};
    return this.http.post(environment.apiUrl+"post/create-post",JSON.stringify( data));
  }
  deletePost(id){
   
    return this.http.get(environment.apiUrl+"post/delete?id="+id);
  }
  updatePost(post){
   
   return this.http.post(environment.apiUrl+"post/update-post",JSON.stringify(post));
 }
}
