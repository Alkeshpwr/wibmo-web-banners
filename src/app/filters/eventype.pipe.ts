import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'eventType' })
export class eventTypePipe implements PipeTransform {

    constructor( ) { }

    amount: any;
    transform(value: any): string {
        console.log(value);
        if (value) {
        if(value =='6'){
           return "CARD EXPIRY 45Day REMINDER"
        } if (value == '5') {
            return "CARD EXPIRY 30Day REMINDER"
        } if (value == "4"){
            return "CARD EXPIRY EXTENSION"
        }if (value == "1"){
            return "KYC UPGRADE REMINDER KEY"
        }
        } else {
            return value;
        }
    }
}