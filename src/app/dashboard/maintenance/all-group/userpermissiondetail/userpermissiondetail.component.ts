import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RequestService } from "../../../../service/request.service";
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarConfig
} from "@angular/material";
import { GroupPremissionSet } from "../../../../models/groupPremissionSet.pojo";
import { LoadingService } from "../../../../loading/loading.service";
import { reportData } from '../../../../models/loginmodels/reportData.pojo';
import { resposneData } from '../../../../models/response.pojo';

@Component({
  selector: "app-userpermissiondetail",
  templateUrl: "./userpermissiondetail.component.html",
  styleUrls: [
    "./userpermissiondetail.component.css",
    "../../../../app.component.scss"
  ]
})
export class UserpermissiondetailComponent implements OnInit {

  id: string;
  sub: any;
  selectedList: any;
  selectionId: any = [];
  allReportPermission: reportData[];
  groupName: string;
  permissionDetials: any = new Array();
  msgType: string;
  verticalPosition: MatSnackBarVerticalPosition = "top";
  config = new MatSnackBarConfig();
  groupPremissionSet: GroupPremissionSet;
  constructor(
    private route: ActivatedRoute,
    private services: RequestService,
    private snackBar: MatSnackBar,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.loadingService.open();
    this.groupPremissionSet = new GroupPremissionSet();
    this.config.verticalPosition = this.verticalPosition;
    this.config.duration = 2000;
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"]; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });

    this.services.gettallpermission().subscribe((resposneData: resposneData) => {
      if (resposneData.statusCode == "000") {
        this.allReportPermission = resposneData.data;
      }
    });

    this.services
      .gettPermissionByGroup(this.id)
      .subscribe((resposneData: resposneData) => {
        this.loadingService.close();
        if (resposneData.statusCode == "000") {
          this.groupPremissionSet = resposneData.data;
          this.groupName = this.groupPremissionSet.groupName;
          this.selectedList = this.groupPremissionSet.reportPermissions;
          for (var i = 0; i < this.selectedList.length; i++) {
            this.selectionId.push(this.selectedList[i].reportId);
          }
        } else {
          this.config.panelClass = ["error-snackbar"];
          this.snackBar.open(resposneData.statusMsg, "Close", this.config);
        }
      });
  }

  updatePermissionlist() {
    this.permissionDetials = { reportPermissions: this.selectedList };
    this.permissionDetials.groupId = this.id;
    this.permissionDetials.status = "1"
    this.services
      .updatePermission(this.permissionDetials)
      .subscribe((data: any) => {
        if (data.statusCode == "000") {
          this.config.panelClass = ["success-snackbar"];
          this.snackBar.open(data.statusMsg, "Close", this.config);
        }
      });
  }

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

}
