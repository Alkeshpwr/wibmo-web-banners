import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBarConfig, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
import { LocalStorageService } from './localstorage.service';
import { UserResp } from '../models/loginmodels/userResp.pojo';

@Injectable()
export class ParentPermissions implements CanActivate {

  userResp:UserResp;
  verticalPosition: MatSnackBarVerticalPosition = "top";
  config = new MatSnackBarConfig();
  constructor(
    private localStorage: LocalStorageService,
    private snackBar: MatSnackBar,
  ) { 
    this.userResp = new UserResp();
  }
  canActivate(route: ActivatedRouteSnapshot):boolean {
    this.userResp =  this.localStorage.getUserData();
    if(this.userResp.reportPermissions.map(function(e) {
       return e.report.parentReportName;
       }).indexOf(route.data["roles"]) >-1){
      return true;
    } else {
      this.config.duration = 2000;
      this.config.panelClass = ["error-snackbar"];
      this.snackBar.open("Dont have Permission. Please Contact Admin", "Close",this.config);
      return false;
    }
  }
}