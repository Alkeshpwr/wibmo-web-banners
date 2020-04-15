import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "state" })
export class StatePipe implements PipeTransform {
  transform(value: number): string {
    
    if (value == 0) {
      return "<span class='chip '>Blocked from CSR</span>";
    } else if (value == 1) {
      return "<span class='chip success'>Account Active </span>";
    } else if (value == 2) {
      return "<span class='chip failure'>Account blocked by user</span>";
    } else {
      return "<span class='chip'>Not active: "+value+"</span>";
    }
   
}
}
