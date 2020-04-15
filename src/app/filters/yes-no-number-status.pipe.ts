import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'YesNoNumberStatus'
})
export class YesNoNumberStatusPipe implements PipeTransform {

  transform(value: number): any {
      if (value == 1) {
        return "Yes";
      } else if (value == 0) {
        return "No";
      } else {
        return "-";
      }
  }

}
