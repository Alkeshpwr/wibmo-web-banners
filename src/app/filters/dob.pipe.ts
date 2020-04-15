import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'dob'})
export class DobPipe implements PipeTransform {
  transform(value: string): string {
    if(value){
    return  value.substring(6, 8)+"/" + value.substring(4, 6) +"/"+value.substring(0, 4)  ;
  }
  }
}