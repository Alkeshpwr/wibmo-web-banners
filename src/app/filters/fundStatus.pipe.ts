import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "fundStatus" })
export class FundStatusPipe implements PipeTransform {
  transform(value: string): string {
    if(value){
    if (value == "100") {
      return "Fund_Claimed_Successful(100)";
    } else if (value == "25") {
      return "Fund_Not_Claimed/Fund_Claim_Attempt_Failed (25)";
    } else if (value == "235") {
      return "Fund_Reversed_To_Sender (235)";
    } else if (value == "175") {
      return "Invalid Confirm Code (175)";
    }  else if (value == "50") {
      return "Rejected by Recipient (50)";
    } else if (value == "125") {
      return "Expired (125)";
    } else if (value == "150") {
      return "Failed (150)";
    } else if (value == "200") {
      return "Failed no card mapped (200)";
    } else if (value == "225") {
      return "Rejected by system (225)";
    }
    else {
        return value;
      }
  }
}
}
