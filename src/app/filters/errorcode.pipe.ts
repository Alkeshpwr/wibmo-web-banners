import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'errorcode' })
export class errorcodePipe implements PipeTransform {
    transform(value: string): string {

        if (value) {
           if(value == "00"){
               return "Renewal Done";
           }else{
               return "Renewal Not Done";
           }
        }
    }
}