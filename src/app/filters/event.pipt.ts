import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'event' })
export class eventPipe implements PipeTransform {
    transform(value: string): string {

        if (value) {
           if(value == "true"){
               return "Reversal";
           }else{
               return "";
           }
        }
    }
}