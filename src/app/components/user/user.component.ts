import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../store/users.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username:any;
  useremail:any;
  userpassword:any;
  useraddress:any;
  usergender:string;
  userhobbies:string;
   data:setdata;
  constructor(private Service:UsersService) {

   
   }

  ngOnInit() {
  }
  public submitUser(formval){
    console.log(formval);
  }
  
}
interface setdata{
userId:any;
id:any;
title:any;
body:any;

}