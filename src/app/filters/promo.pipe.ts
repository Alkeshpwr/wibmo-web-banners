import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'promo' })
export class promoPipe implements PipeTransform {
    promo: any;
    transform(value: any): string {
        if(value == "0"){
            return "Promo Reserved"
        } else if(value == "10"){
            return "Promo Reserved Failed"
        } else if(value == "1"){
            return "Promo Updated"
        } else if(value == "11"){
            return "Promo Updated Failed"
        } else if(value == "2"){
            return "Promo Confirmed"
        } else if(value == "12"){
            return "Promo Confirmed Failed"
        } else if(value == "3"){
            return "Promo Cancelled"
        } else if(value == "13"){
            return "Promo Cancelled Failed"
        }
        else {
            return value;
        }
}

}