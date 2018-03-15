import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
 @Input() isFavourite:boolean=true;
 @Output() changeeve = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
onclick(){
  this.isFavourite = !this.isFavourite;
  this.changeeve.emit(this.isFavourite);
}

}
