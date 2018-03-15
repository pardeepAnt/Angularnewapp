import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'mypipe'
})
export class CustomPipe implements PipeTransform {
    transform(value: string,limit?:number) {
        if(!value){
            return null
        }
        if(value.length > 2){
            let actualLimit = (limit) ? limit:5;
            return value.substr(0,actualLimit)+"...";
        }
    }
}