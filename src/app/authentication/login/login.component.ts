import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { AuthenticationService } from "../authentication.service";
/*import {
  MatSnackBarVerticalPosition,
  MatSnackBarConfig,
  MatSnackBar
} from "@angular/material/snack-bar";
*/
import {MatInputModule} from '@angular/material/input';
//import {MatSnackBarModule} from '@angular/material/snack-bar';
//import {MatSnackBarConfig} from '@angular/material/snack-bar/snack-bar-config';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { LocalStorageService } from "../../service/localstorage.service";
import { Router } from "@angular/router";
//import { UserIdleService } from 'angular-user-idle';
//import { Subscription } from 'rxjs';
import {TimeService } from '../../service/timeservice.service';
import { LoginReq } from '../../models/loginmodels/loginReq.pojo';
import { LoginResp } from '../../models/loginmodels/loginResp.pojo';
import { UserResp } from '../../models/loginmodels/userResp.pojo';
import { resposneData } from '../../models/response.pojo';
import { initResp } from '../../models/loginmodels/initDatas.pojo';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {//implements OnInit {
  initResp: initResp[];
  loginReq: LoginReq;
  loginResp: LoginResp;
  userResp: UserResp;
  userform: FormGroup;
  hidePassword = true;
  //verticalPosition: MatSnackBarVerticalPosition = "top";
  //config = new MatSnackBarConfig();
  timerStartSubscription:'';
  timeoutSubscription:'';
  pingSubscription: '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private LocalStorageService: LocalStorageService,
    //private snackBar: MatSnackBar,
    //private userIdle: UserIdleService,
    private authenticationService: AuthenticationService,
    private timeService:TimeService
  ) {
    this.LocalStorageService.removeUserData();
    this.loginResp = new LoginResp();
    this.userResp = new UserResp();
  }

  ngOnInit() {
    if(this.timerStartSubscription)
      //this.timerStartSubscription.unsubscribe();
    if(this.timeoutSubscription)
      //this.timeoutSubscription.unsubscribe();
    if(this.pingSubscription)
      //this.pingSubscription.unsubscribe();
    this.authenticationService.initService().subscribe((respData: resposneData) => {
      if (respData.statusCode == "removeMe") {
        this.initResp = respData.data;
      } else {
        //this.config.panelClass = ["error-snackbar"];
        //this.snackBar.open(respData.statusMsg, "Close", this.config);
      }
    });

    this.userform = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      programId: new FormControl("2000", Validators.required)
    });
  }

  onSubmit(value: LoginReq) {
    this.loginReq = value;
    this.authenticationService
      .userTokenService(this.loginReq)
      .subscribe((respData: resposneData) => {
        if (respData.statusCode == "000"  ) {  
          console.log("************** test inside token service  IF condition remove me ");
          this.loginResp = respData.data;
          this.LocalStorageService.saveAuthData(this.loginResp);
          this.getUserDetails(this.loginResp);
        } else {

          console.log("************** test inside token service ELSE Condition ");
          this.LocalStorageService.removeUserData();
          //this.config.panelClass = ["error-snackbar"];
          //this.snackBar.open(respData.statusMsg, "Close", this.config);
        }
      });
  }

  getUserDetails(userDetails) {
    console.log("************** test inside user Detaisl "+userDetails.username);
    console.log("************** tToken  "+userDetails.jwttoken);
    this.authenticationService
      .userAuthenticateService(userDetails)
      .subscribe((respData: resposneData) => {
        if ((respData.statusCode != "401")) {
          console.log("inside if condition login.component.ts ** 1 ");
          this.userResp = respData.data;
          // to assign GeoId
          //for(var i=0; i < this.initResp.length;i++){
           // if(this.loginReq.programId == this.initResp[i].programId){
           // this.userResp.geoId = this.initResp[i].geoId
          //}
          //}

          console.log("inside if condition login.component.ts ** 2 ");
          // to assign GeoId
          this.LocalStorageService.saveUserData(this.userResp);
          this.router.navigate(["/home"]);
          this.timeService.startWatching();
          this.timeService.startTimer();
          this.timeService.ontimeOut();
          this.timeService.startPing();
          console.log("inside if condition login.component.ts ** 3 "+this.router.navigate);
        } else {
          console.log("inside else condition login.component.ts ** ");
          this.LocalStorageService.removeUserData();
          //this.config.panelClass = ["error-snackbar"];
          //this.snackBar.open(respData.statusMsg, "Close", this.config);
        }
      });
  }
}
