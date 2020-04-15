import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "gender" })
export class GenderPipe implements PipeTransform {
  transform(value: string): string {
    if(value) {
    if (value == "M") {
      return "<i class='fa fa-mars'></i> Male";
    } else if (value == "F") {
      return "<i class='fa fa-venus'></i> FeMale";
    } else  {
      return "<i class='fa fa-minus-circle'></i> Undefined";
    } 
  }
}
}
