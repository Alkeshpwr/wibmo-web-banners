import { Component,  } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['error-page.component.css']
})
export class errorPageComponent { 

	constructor( private location: Location ) { 
    }
  
    goBack() {
      this.location.back();
    }

}
