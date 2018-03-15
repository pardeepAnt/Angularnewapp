import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

   courses = [
    {id:1,name:'CourseA'},
    {id:2,name:'CourseB'},
    {id:3,name:'CourseC'},
    {id:4,name:'CourseD'}

  ];
  form_status:boolean=false;
  course:string;
  category:string;
  gurantee:string;
  constructor() { }

  ngOnInit() {
  }
 log(f){
   console.log(f);
 }
 submitted(form){
 this.form_status = true;
 this.course = form.value.course;
 this.category = form.value.category.name;
 this.gurantee = (form.value.hasGuarantee) ? 'Yes':'No';

 }
}
