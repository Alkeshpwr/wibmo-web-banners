import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/localstorage.service';
import { UserResp } from '../models/loginmodels/userResp.pojo';

@Directive({
  selector: '[permission]'
})
export class PermissionsDirective implements OnInit{
  @Input('permission') permission: string;
  userResp:UserResp;

  constructor(private _el: ElementRef,
    private localStorage: LocalStorageService,
  ) { }
  ngOnInit() {
    this.userResp =  this.localStorage.getUserData();
     if(this.permission)
    if(this.userResp.reportPermissions.map(function(e) { return e.report.reportName; }).indexOf(this.permission) === -1) {
      this._el.nativeElement.style.display = 'none';
    }
  }

}
