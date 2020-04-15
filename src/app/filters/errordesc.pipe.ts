import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'errordesc' })
export class errordescPipe implements PipeTransform {
    transform(value: string): string {
           if(value == ""){
               return "-";
           }else{
               return value;
           }
        
    }
}