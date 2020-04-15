import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormGroupDirective
} from "@angular/forms";
import { RequestService } from "../../../service/request.service";
import { LoadingService } from "../../../loading/loading.service";
import { MatSnackBarVerticalPosition, MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { LocalStorageService } from '../../../service/localstorage.service';
import { UserResp } from '../../../models/loginmodels/userResp.pojo';
import { programms } from '../../../models/loginmodels/programms.pojo';
import { resposneData } from '../../../models/response.pojo';

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css","../../../app.component.scss"]
})
export class AddUserComponent implements OnInit {
  username: string;
  password: string;
  loginname: string;
  mobilenumber: number;
  email: string;
  lastname: string;
  middlename: string;
  programms:programms;
  firstname: string;
  groupname: any;
  userform: FormGroup;
  submitted: boolean;
  groupList: any;
  msgType: string;
  userResp: UserResp
  loggedInuserResp:UserResp;
  hide = true;
  datatosend: any;
  verticalPosition: MatSnackBarVerticalPosition = "top";
  config = new MatSnackBarConfig();
  @ViewChild(FormGroupDirective, { static: true }) myForm;
  constructor(
    @Inject(RequestService) private services: RequestService,
    private fb: FormBuilder,
    private loading: LoadingService,
    private snackBar: MatSnackBar,
    private localService:LocalStorageService

  ) {

    this.programms = new programms()

  }

  ngOnInit() {
    this.userResp = new UserResp();
    this.loggedInuserResp = this.localService.getUserData();
    this.config.verticalPosition = this.verticalPosition;
    this.config.duration = 2000;
    this.userform = this.fb.group(
      {
        password: new FormControl(
          "",
          Validators.compose([Validators.required])
        ),
        loginName: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required,Validators.email]),
        mobile: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(15)
          ])
        ),
        name: new FormControl("", Validators.required),
        userGroupList: new FormControl("", Validators.required),
      }
    );

    this.services.gettallGroups().subscribe((data: resposneData) => {
      if (data.statusCode == "000") {
        this.groupList = data.data;
      } else {
        this.config.panelClass = ["error-snackbar"];
        this.snackBar.open(data.statusMsg, "Close", this.config);
      }
    });
  }

  onChange(cvalue: string, isChecked: boolean) {
    const groupArray = <FormArray>this.userform.controls.userGroupList;
    if (isChecked) {
      groupArray.push(new FormControl(cvalue));
    } else {
      let index = groupArray.controls.findIndex(x => x.value == cvalue);
      groupArray.removeAt(index);
    }
  }
  
  onSubmit(value: any ) {
    this.loading.open();
    this.userResp.mobileNumber = value.mobile;
    this.userResp.userPassword = value.password;
    this.userResp.email = value.email;
    this.userResp.name = value.name;
    this.userResp.loginName = value.loginName;
    this.userResp.status = 1;
    this.userResp.otpEnabled = 0;
    this.userResp.userGroupList = value.userGroupList.toString();
    this.programms.programId = this.loggedInuserResp.currentProgramIdSelected;
    this.programms.status = 1
    this.userResp.userProgramMappings.push(this.programms);
    this.services.registerUser(this.userResp).subscribe((data: any) => {
      this.loading.close();
      this.myForm.resetForm();
      if (data.statusCode == "000") {
        this.config.panelClass = ["success-snackbar"];
        this.snackBar.open(data.statusMsg, "Close", this.config);
      } 
    });
  }
}
