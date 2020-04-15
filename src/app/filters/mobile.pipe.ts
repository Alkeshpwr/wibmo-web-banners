import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "mobile" })
export class mobilePipe implements PipeTransform {
  transform(value: number): string {
      const lastNum = value.toString().slice(7, 10)
      return "XXX-XXX-X"+lastNum;
  }
}