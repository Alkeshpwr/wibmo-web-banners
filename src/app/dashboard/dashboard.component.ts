import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { LocalStorageService } from '../service/localstorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,private LocalStorageService: LocalStorageService) { }

  username:any=[];

  ngOnInit() {
    this.document.body.classList.remove("bgbody");
    this.username = this.LocalStorageService.getUserData(); 
    
  }

}
