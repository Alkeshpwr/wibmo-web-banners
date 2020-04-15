import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'transaction' })
export class transactionPipe implements PipeTransform {
    transform(value: number): string {
        if (value) {
        if(value == 500){
            return "Failed Response from BDO"
        } if (value == 100) {
            return "Successful Transaction"
        } if (value == 25){
            return "Unauthorized  to call the BDO API"
        }
        } else {
            return "";
        }
    }
}