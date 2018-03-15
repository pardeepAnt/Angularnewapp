import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'isEmpty'
})
export class IsemptyPipe implements PipeTransform {
    transform(value: any[],typeofval?:string) {
        if(typeofval == "json"){
            console.log(JSON.stringify(value));
           if( JSON.stringify(value) == '[]' ){

               return true; 
           }else{
               return false;
           }
        }else{
        if(value.length <= 0){
           return true;
        }else{
            return false;
        }
    }
    }
}