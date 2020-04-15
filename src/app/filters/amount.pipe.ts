import { Pipe, PipeTransform } from '@angular/core';
import { InitService } from '../service/init.service';

@Pipe({ name: 'amount' })
export class amountPipe implements PipeTransform {

    constructor(
        private InitService:InitService
    ) {

    }

    amount: any;
    transform(value: any): string {
        if (value) {
        if(value != 0){
            this.amount = value / 100;
            let val = this.amount;
            let res =  String(this.amount).split("."); 
                if(res.length == 1 || res[1].length < 3) { 
                    val = val.toFixed(2);
                 }
            // if(this.InitService.getGeoCode() == "ph"){
            // return "&#8369;" + val;
            // }
            // else {
            //     return "&#8377;" + val;
            // }
            return "&#8377;" + val;

        } else {
            return value;
        }
        } else {
            return value;
        }
    }
}