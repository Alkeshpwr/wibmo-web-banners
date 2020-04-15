import { Pipe, PipeTransform } from '@angular/core';
import { globalData } from '../common/global.model';

@Pipe({name: 'datewithSUP'})
export class datewithSUPPipe implements PipeTransform {
  transform(value: string): string {
    if(value){
       
        let d = new Date(value);
           let finalFormat =(d.getDate() == 1 || d.getDate() == 31)? '1<sup>st</sup>' : (d.getDate() == 2)? '2<sup>nd</sup>':(d.getDate() == 3)? '1<sup>rd</sup>':d.getDate()+'<sup>th</sup>';
           finalFormat += ' '+globalData.fullMonths[d.getMonth()];
           finalFormat += ' '+d.getFullYear();
           finalFormat += ' '+d.getHours()+': '+d.getMinutes()+': '+d.getSeconds()+' ';
           finalFormat += (d.getHours() >= 12) ? 'PM' : 'AM';
           return finalFormat;
  }
  }
}