import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "status" })
export class StatusPipe implements PipeTransform {
  transform(value: string): string {
    if(value){
    if (value == "SUCCESS") {
      return "<span class='chip success'>Success </span>";
    } else if (value == "FAILURE") {
      return "<span class='chip failure'>Failure </span>";
    } else if (value == "DISABLED") {
      return "<span class='chip'>Disabled </span>";
    } else if (value == "PASSED") {
      return "<span class='chip success'>Passed </span>";
    } else if (value == "BLOCKED"){
      return "<span class='chip warning'>Blocked </span>";
    } else if (value == "ACTIVE"){
      return "<span class='chip success'>Active </span>";
    } else if (value == "INACTIVE"){
      return "<span class='chip warning'>In Active </span>";
    } else if (value == "CLOSED"){
      return "<span class='chip failure'>Closed </span>";
    } else {
        return "<span class='chip'>Not Applicable </span>";
      }
  }
}
}
