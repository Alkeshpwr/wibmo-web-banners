import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "cardBinStatus" })
export class CardBinStatusPipe implements PipeTransform {
  transform(value: string): string {
    if (value == "0") {
      return "<span class='chip failure'>Not Active</span>";
    } else if (value == "1") {
      return "<span class='chip success'>Active</span>";
    } 
}
}
