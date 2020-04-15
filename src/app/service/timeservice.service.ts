import { Injectable } from "@angular/core";
//import { UserIdleService } from "angular-user-idle";
import { renewTokenReq } from "../common/header/model/renwenTokenReq.pojo";
import { LocalStorageService } from "./localstorage.service";
import { RequestService } from "./request.service";
import { Router } from "@angular/router";
/*import {
  MatSnackBarVerticalPosition,
  MatSnackBarConfig,
  MatSnackBar
} from "@angular/material";*/
import { Subscription } from "rxjs";
import { UserResp } from '../models/loginmodels/userResp.pojo';
import { LoginResp } from '../models/loginmodels/loginResp.pojo';
import { resposneData } from '../models/response.pojo';

@Injectable({
  providedIn: "root"
})
export class TimeService {
  renewTokenReq: renewTokenReq;
  userResp: UserResp;
  loginResp: LoginResp;
  //verticalPosition: MatSnackBarVerticalPosition = "top";
  //config = new MatSnackBarConfig();

  timerStartSubscription: Subscription;
  timeoutSubscription: Subscription;
  pingSubscription: Subscription;

  constructor(
    //private userIdle: UserIdleService,
    private localStorage: LocalStorageService,
    private services: RequestService,
    private router: Router,
    //private snackBar: MatSnackBar
  ) {
    this.renewTokenReq = new renewTokenReq();
    this.userResp = new UserResp();
    this.loginResp = new LoginResp();
    
  }

  startWatching() {
    //this.userIdle.startWatching();
  }

  stopWatching() {
    //this.userIdle.stopWatching();
  }

  startTimer() {
    /*this.timerStartSubscription = this.userIdle
      .onTimerStart()
      .subscribe(count => {
        if (count) {
          console.log(count);
        }
      });*/
  }

  stopTimer() {
    //this.userIdle.stopTimer();
  }

  ontimeOut() {
    /*this.timeoutSubscription = this.userIdle
      .onTimeout()
      .subscribe(() => {
      this.config.panelClass = ["error-snackbar"];
      this.config.verticalPosition = this.verticalPosition;
      this.config.duration = 2000000;
      this.snackBar.open("Session Expired. Please login again", "Close",this.config);
      this.logout();

      });*/
  }

  startPing() {
    /*this.pingSubscription = this.userIdle.ping$.subscribe(() => {
      this.renewToken();
    });*/
  }

  logout() {
    /*this.stopTimer();
    this.stopWatching();
    this.pingSubscription.unsubscribe();
    this.timeoutSubscription.unsubscribe();
    this.timerStartSubscription.unsubscribe();
    this.userResp = this.localStorage.getUserData();
    this.services.logout(this.userResp).subscribe(() => {
      this.localStorage.removeUserData();
      this.router.navigate(["login"]);
    });*/
  }

  renewToken() {
    this.userResp = this.localStorage.getUserData();
    this.loginResp = this.localStorage.getAuthData();
    this.renewTokenReq.programId = this.userResp.currentProgramIdSelected;
    this.renewTokenReq.username = this.userResp.loginName;
    this.services
      .renewToken(this.renewTokenReq)
      .subscribe((resposneData: resposneData) => {
        if (resposneData.statusCode == "000") {
          this.loginResp = resposneData.data;
          this.localStorage.saveAuthData(this.loginResp);
        } else {
          //this.config.panelClass = ["error-snackbar"];
          //this.config.verticalPosition = this.verticalPosition;
          //this.config.duration = 2000000;
          //this.snackBar.open(
            //"Session Expired. Please login again",
            //"Close",
            //this.config
          //);
          this.logout();
        }
      });
  }
}
