import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'timezone' })
export class timezonePipe implements PipeTransform {
    timezone: any;
    transform(value: any): string {
        if(value){
        if (localStorage.getItem("timeZone") == "PH") {
            return new Date(value).toLocaleString("en-US", {timeZone: "Asia/Manila"});
        } else {
            return new Date(value).toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
        }
        } else {
    return "";
        }
}

}