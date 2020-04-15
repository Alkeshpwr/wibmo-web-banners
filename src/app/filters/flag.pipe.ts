import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "flag" })
export class flagPipe implements PipeTransform {
  transform(value: any): string {
  
    if (value ) {
      if (localStorage.getItem("timeZone") == "PH") {
      return value +" <img class='zone' src='../../../assets/images/ph.png' alt='zone icon'/>"
      } else {
        return value +" <img class='zone' src='../../../assets/images/in.png' alt='zone icon'/>"
      }
    }
}
}
