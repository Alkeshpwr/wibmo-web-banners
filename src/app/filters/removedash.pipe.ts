import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'removedash' })
export class removedashPipe implements PipeTransform {
    removeDash:string;
    transform(value: any): string {
        if (value) {
            this.removeDash =  value.split("_").join(" ");
            return this.removeDash.replace(
                /\w\S*/g,
                function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }
            );


    }
}

}