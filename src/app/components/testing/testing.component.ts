import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  title:string;
  constructor() { }

  ngOnInit() {
  }

}
