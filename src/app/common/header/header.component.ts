import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "../../service/localstorage.service";
import { Router } from "@angular/router";
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarConfig
} from "@angular/material";
import { browserRefresh } from "../../app.component";
import { TimeService } from "../../service/timeservice.service";
import { UserResp } from '../../models/loginmodels/userResp.pojo';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  userdetails: any = [];
  userResp: UserResp;
  browserRefresh: boolean;
  verticalPosition: MatSnackBarVerticalPosition = "top";
  config = new MatSnackBarConfig();
  isTimerStarted: boolean;
  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private snackBar: MatSnackBar,
    private timeService: TimeService
  ) {
    this.userResp = new UserResp();
  }

  ngOnInit() {
    this.snackBar.dismiss();
    this.userResp = this.localStorage.getUserData();
    this.browserRefresh = browserRefresh;
    if (this.browserRefresh) {
      this.timeService.renewToken();
      this.timeService.startWatching();
      this.timeService.startTimer();
      this.timeService.ontimeOut();
      this.timeService.startPing();
    }
  }

  logout() {
    this.timeService.logout();
  }
}
