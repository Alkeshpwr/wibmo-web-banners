import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "walletstatus" })
export class WalletStatusPipe implements PipeTransform {
  transform(value: string): string {
    if(value){
        if (value == "0") {
            return "<span class='chip' >Wallet Inactive </span>";
          } else if (value == "1") {
            return "<span class='chip success' >Wallet Active </span>";
          } else if (value == "13") {
            return "<span class='chip failure' >Wallet blocked Permanently </span>";
          }else if (value == "10") {
            return "<span class='chip failure' >Wallet Closed </span>";
          }else if (value == "100") {
            return "<span class='chip failure' >Debit Blocked </span> ";
          }else if (value == "110") {
            return "<span class='chip failure' >Credit Blocked</span> ";
          }else if (value == "120") {
            return "<span class='chip failure' >Credit Debit Blocked</span> ";
          }else if (value == "150") {
            return "<span class='chip failure' >Temporary Blocked</span> ";
          }else if (value == "130") {
            return "<span class='chip failure' > Close Wallet Init </span>";
          }
    }
}
}
