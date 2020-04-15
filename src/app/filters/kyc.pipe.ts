import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "kyc" })
export class KycPipe implements PipeTransform {
  transform(value: number): string {
    if(value){
    if (value == 100) {
      return "<span class='success chip'>E KYC ("+ value +") </span>";
    } else if (value == 150) {
      return "<span class='success chip'>I KYC ("+ value +") </span>";
    } else if (value == 200)  {
      return "<span class='success chip'>B KYC ("+ value +") </span>";
    } else if (value == 10)  {
      return "<span class='chip failure'>No Wallet for KYC ("+ value +") </span>";
    }else if (value == 20)  {
      return "<span class='chip failure'>No KYC ("+ value +") </span>";
    } else if (value == 30)  {
      return "<span class='chip' selected> Minimum KYC ("+ value +") </span>";
    }else {
      return value.toString();
    }
    }
  }
}