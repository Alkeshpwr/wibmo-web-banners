import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'kycexception' })
export class kycexceptionPipe implements PipeTransform {

    constructor( ) { }

    amount: any;
    transform(value: any): string {
        if (value) {
        if(value =='Y'){
           return "Success"
        } if (value == 'N') {
            return "Failure"
        } if (value="N/A"){
            return "Not Available"
        }
        } else {
            return value;
        }
    }
}