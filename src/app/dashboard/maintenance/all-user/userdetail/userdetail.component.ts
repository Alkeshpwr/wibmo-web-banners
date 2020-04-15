import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { LoadingService } from "../../../../loading/loading.service";
import { RequestService } from "../../../../service/request.service";
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarConfig
} from "@angular/material";
import { AuthenticationService } from "../../../../authentication/authentication.service";
import { UserGroupResp } from "../../../../models/allGroupResp.pojo";
import { LocalStorageService } from '../../../../service/localstorage.service';
import { UserResp } from '../../../../models/loginmodels/userResp.pojo';
import { programms } from '../../../../models/loginmodels/programms.pojo';
import { resposneData } from '../../../../models/response.pojo';

@Component({
  selector: "app-userdetail",
  templateUrl: "./userdetail.component.html",
  styleUrls: ["./userdetail.component.css", "../../../../app.component.scss"]
})
export class UserdetailComponent implements OnInit {
  sub: any;
  userName: any;
  userResp: UserResp;
  userGroupResp: UserGroupResp[];
  loginuserData:UserResp;
  groupLists: any = [];
  submitted: boolean;
  getUserDetailsform: FormGroup;
  permissionList: any = [];
  dataTosend: any = [];
  selectedList: any = [];
  programms : programms;
  verticalPosition: MatSnackBarVerticalPosition = "top";
  config = new MatSnackBarConfig();
  constructor(
    private route: ActivatedRoute,
    private services: RequestService,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder,
    private loading: LoadingService,
    private snackBar: MatSnackBar,
    private localService:LocalStorageService,
  ) {
    this.userResp = new UserResp();
    this.loginuserData = new UserResp();
    this.programms = new programms();
  }

  ngOnInit() {
    this.loginuserData = this.localService.getUserData();
    this.config.verticalPosition = this.verticalPosition;
    this.config.duration = 2000;
    this.sub = this.route.params.subscribe(params => {
      this.userName = params["id"];
    });

    this.getUser();
    this.getAllGroup();
    this.getUserDetailsform = this.fb.group({
      username: new FormControl(),
      badtrycount: new FormControl(),
      lastlogintime: new FormControl(),
      userId: new FormControl(),
      groupname: new FormControl(""),
      status: new FormControl()
    });
  }

  getAllGroup() {
    this.loading.open();
    this.services.gettallGroups().subscribe((resposneData: resposneData) => {
      this.loading.close();
      if (resposneData.statusCode == "000") {
        this.userGroupResp = resposneData.data
      }
    });
  }

  getUser() {
    this.loading.open();
    this.authenticationService
      .userAuthenticateService(this.userName)
      .subscribe((data: resposneData) => {
        this.loading.close();
        if (data.statusCode == "000") {
          this.userResp = data.data;
          if(this.userResp)
          this.selectedList = this.userResp.userGroupList
            .split(",")
            .map(Number);
          this.getUserDetailsform.controls["username"].setValue(
            this.userResp.loginName
          );
          this.getUserDetailsform.controls["badtrycount"].setValue(
            this.userResp.badTryCount
          );
          this.getUserDetailsform.controls["userId"].setValue(
            this.userResp.id
          );
          this.getUserDetailsform.controls["status"].setValue(
            this.userResp.status
          );
        }
      });
  }

  onChange(cvalue: string, isChecked) {
    if (isChecked) {
      if (this.selectedList.indexOf(cvalue) === -1) {
        this.selectedList.push(cvalue);
      }
    } else {
      for (var i = 0; i < this.selectedList.length; i++) {
        if (this.selectedList[i] == cvalue) {
          this.selectedList.splice(i, 1);
        }
      }
    }
  }

  onSubmit(value: any) {
    this.userResp.userProgramMappings = [];
    this.userResp.userGroupList = this.selectedList.toString();
    this.userResp.status = value.status;
    this.userResp.loginName = value.username;
    this.programms.programId = this.loginuserData.currentProgramIdSelected
    this.programms.status = 1;
    this.userResp.userProgramMappings.push(this.programms);
    this.services.updateUser(this.userResp).subscribe((resposneData: resposneData) => {
      this.loading.close();
      if (resposneData.statusCode == "000") {
        this.config.panelClass = ["success-snackbar"];
        this.snackBar.open(resposneData.statusMsg, "Close", this.config);
      } 
    });
  }
}
