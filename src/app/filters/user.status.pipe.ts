import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "userStatus" })
export class UserStatusPipe implements PipeTransform {
  transform(value: number): string {
    if (value == 0) {
      return "<span class='chip failure'>Blocked</span>";
    } else if (value == 1) {
      return "<span class='chip success'>Account Active </span>";
    } else if (value == 2) {
      return "<span class='chip failure'>Blocked</span>";
    } else {
      return value.toString();
    }
}
}
