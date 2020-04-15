import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/localstorage.service';
import { UserResp } from '../models/loginmodels/userResp.pojo';

@Directive({
  selector: '[parentPermission]'
})
export class ParnetPermissionsDirective implements OnInit{
  @Input('parentPermission') parentPermission: string;
  userResp:UserResp;

  constructor(private _el: ElementRef,
    private localStorage: LocalStorageService,
  ) { }
  ngOnInit() {
    this.userResp =  this.localStorage.getUserData();
     if(this.parentPermission)
    if(this.userResp.reportPermissions.map(function(e) { return e.report.parentReportName; }).indexOf(this.parentPermission) === -1) {
      this._el.nativeElement.style.display = 'none';
    }
  }

}
