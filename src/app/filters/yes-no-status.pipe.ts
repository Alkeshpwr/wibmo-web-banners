import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNoStatus'
})
export class YesNoStatusPipe implements PipeTransform {

  transform(value: any): any {
    if(value){

      if (value == "Y") {
        return "Yes";
      } else if (value == "N") {
        return "No";
      } else {
        return "-";
      }

      


    }
    
  }

}
