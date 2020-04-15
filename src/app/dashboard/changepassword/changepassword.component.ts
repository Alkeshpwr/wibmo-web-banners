import { Component, OnInit, Inject } from "@angular/core";
import { RequestService } from "../../service/request.service";
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import * as CryptoJS from "crypto-js";
import { LoadingService } from "../../loading/loading.service";
import { MatSnackBarConfig, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
import { LocalStorageService } from '../../service/localstorage.service';
import { UserResp } from '../../models/loginmodels/userResp.pojo';
import { resposneData } from '../../models/response.pojo';

@Component({
  selector: "app-changepassword",
  templateUrl: "./changepassword.component.html",
  styleUrls: ["./changepassword.component.css"]
})
export class ChangepasswordComponent implements OnInit {
  oldpassword: string;
  password: string;
  cpassword: string;
  hashdoldpassword: string;
  changePasswordResquest:any = {};
  hashdnewpassword: string;
  hashdconfirmpassword: string;
  userData:UserResp
  userform: FormGroup;
  submitted: boolean;
  verticalPosition: MatSnackBarVerticalPosition = "top";
  config = new MatSnackBarConfig();
  constructor(
    @Inject(RequestService) private services: RequestService,
    private fb: FormBuilder,
    private loading: LoadingService,
    private snackBar: MatSnackBar,
    private localService: LocalStorageService,
  ) {}

  ngOnInit() {
    this.userData = this.localService.getUserData();
    this.config.verticalPosition = this.verticalPosition;
    this.config.duration = 2000;
    this.userform = this.fb.group(
      {
        oldPassword: new FormControl(
          "",
          Validators.compose([Validators.required])
        ),
        newPassword: new FormControl(
          "",
          Validators.compose([Validators.required])
        ),
        cpassword: new FormControl(
          "",
          Validators.compose([Validators.required, Validators.minLength(4)])
        )
      },
      { validator: this.checkIfMatchingPasswords("newPassword", "oldPassword") }
    );
  }

  checkIfMatchingPasswords(
    passwordKey: string,
    passwordConfirmationKey: string
  ) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  onSubmit(value: string) {
    this.loading.open();
    this.submitted = true;
    this.changePasswordResquest = value;
    delete this.changePasswordResquest["cpassword"];
    this.changePasswordResquest.loginName = this.userData.loginName;
    this.services.changePasswordforSelf(
      this.changePasswordResquest
    ).subscribe((resposneData: resposneData) => {
      this.loading.close();
      if(resposneData.statusCode="000") {
        this.config.panelClass = ["success-snackbar"];
        this.snackBar.open(resposneData.statusMsg, "Close", this.config);
      }
      
    });
  }
}
