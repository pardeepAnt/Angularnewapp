import { DataService } from './data.service';
import { Injectable, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService extends DataService{
  
  constructor(http:Http) { 
    super(http);
  }
    
 
  
}
