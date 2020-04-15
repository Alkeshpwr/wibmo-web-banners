import { Component, OnInit } from '@angular/core';
import { InitService } from '../../service/init.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  version:string;
  constructor(
    initService:InitService
  ) {

    this.version = initService.version;

   }

  ngOnInit() {

  }

}
