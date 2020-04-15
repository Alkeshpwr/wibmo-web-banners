import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "cardstatus" })
export class CardStatusPipe implements PipeTransform {
  transform(value: string): string {
    
    if (value == "1") {
      return "<span class='chip success'>Card Active</span>";
    } else if (value == "0") {
      return "<span class='chip failure'>Card Blocked From CSR</span>";
    } else if (value == "2") {
      return "<span class='chip failure'>Card Blocked</span>";
    } 
  
}
}
