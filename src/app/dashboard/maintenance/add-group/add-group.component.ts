import { Component, OnInit, Inject } from "@angular/core";
import { RequestService } from "../../../service/request.service";
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Router } from "@angular/router";
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarConfig
} from "@angular/material";
import { reportData } from '../../../models/loginmodels/reportData.pojo';
import { resposneData } from '../../../models/response.pojo';

@Component({
  selector: "app-add-group",
  templateUrl: "./add-group.component.html",
  styleUrls: ["./add-group.component.css", "../../../app.component.scss"]
})
export class AddGroupComponent implements OnInit {
  permissionsList: any = [];
  permissionDetials: any = new Array();

  createGroupform: FormGroup;
  selectedList: any = [];
  sendData: any = [];
  verticalPosition: MatSnackBarVerticalPosition = "top";
  config = new MatSnackBarConfig();
  allReportPermission: reportData[];

  constructor(
    @Inject(RequestService) private services: RequestService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  updateCheckedOptions(value, event) {
    if (event.checked) {
      for (var i = 0; i < this.allReportPermission.length; i++) {
        if (this.allReportPermission[i].reportId == value) {
          this.selectedList.push(this.allReportPermission[i]);
        }
      }
    } else {
      for (var i = 0; i < this.selectedList.length; i++) {
        if (this.selectedList[i].reportId == value) {
          this.selectedList.splice(i, 1);
        }
      }
    }
  }

  ngOnInit() {
    this.config.verticalPosition = this.verticalPosition;
    this.config.duration = 2000;
    this.createGroupform = this.fb.group({
      groupName: new FormControl("", Validators.required)
    });

    this.services.gettallpermission().subscribe((resposneData: resposneData) => {
      if (resposneData.statusCode == "000") {
        this.allReportPermission = resposneData.data;
      }
    });
  }

  onSubmit(value: any) {
    if (this.selectedList.length >= 1) {
      this.permissionDetials = { reportPermissions: this.selectedList };
      this.permissionDetials.groupName = value.groupName;
      this.permissionDetials.description = value.groupName;
      this.permissionDetials.status = "1";
      this.services
        .createGroup(this.permissionDetials)
        .subscribe((data: any) => {
          if (data.statusCode == "000") {
            this.config.panelClass = ["success-snackbar"];
            this.snackBar.open(data.statusMsg, "Close", this.config);
          } else {
            this.config.panelClass = ["error-snackbar"];
            this.snackBar.open(data.statusMsg, "Close", this.config);
          }
        });
    } else {
      this.config.panelClass = ["error-snackbar"];
      this.snackBar.open(
        "Please assign atleat one permission",
        "Close",
        this.config
      );
    }
  }
}
