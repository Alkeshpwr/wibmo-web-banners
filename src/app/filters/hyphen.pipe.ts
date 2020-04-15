import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'hyphen'})
export class Hyphen implements PipeTransform {
  transform(value: any): any {
    if(value){
       let length = value.length;
       let finalFormat = '';
        for (let i = 0;i <= length;i = i+3){
           
            if(i < length-3){
                finalFormat += value.substr(i,3)+'-';
            }
              else
              finalFormat += value.substr(i,3);
        }
           return finalFormat;
  }  else {
    return  "N/A";
  }
  }
}