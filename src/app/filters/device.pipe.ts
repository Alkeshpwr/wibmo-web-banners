import { Pipe, PipeTransform } from '@angular/core';
import { InitService } from '../service/init.service';

@Pipe({ name: 'device' })
export class devicePipe implements PipeTransform {
    constructor(
    ) {
    }
    transform(value: any): string {
        if (value) {
            if(value == 3){
                return "Mobile App";
            }else if(value == 1){
                return"Web/Desktop";
            }
        } else {
            return value;
        }
    }
}