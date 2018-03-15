import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zonguru';
  post = {
    title:"title",
    isFavourite:false
  }
  review = {
    
  }
  changefavourites(v){
    console.log("yes event has changed"+v);
  }
}
