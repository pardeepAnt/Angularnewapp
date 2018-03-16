import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Injectable, ErrorHandler } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private http:Http) { }
  getAll(method){
  return this.http.get(environment.apiUrl+method).catch(this.handleError);
 }
  create(method,resources){
    
    return this.http.post(environment.apiUrl+"post/create-post",JSON.stringify(resources)).catch(this.handleError);
  }
  delete(method,id){
   
    return this.http.get(environment.apiUrl+method).catch(this.handleError);
  }
  update(method,resources){
   
   return this.http.post(environment.apiUrl+method,JSON.stringify(resources)).catch(this.handleError);
 }
 private handleError(error:Response){
  if(error.status === 404)
    return Observable.throw(new NotFoundError());
  if(error.status === 400)
    return Observable.throw(new NotFoundError(error));

  return Observable.throw(new AppError(error));
 }
}
