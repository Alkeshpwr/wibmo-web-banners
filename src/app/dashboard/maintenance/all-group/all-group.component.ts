import { Component, OnInit, Inject } from "@angular/core";
import { RequestService } from "../../../service/request.service";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarVerticalPosition
} from "@angular/material";
import { UserResp } from '../../../models/loginmodels/userResp.pojo';
import { resposneData } from '../../../models/response.pojo';
import { UserGroupResp } from '../../../models/allGroupResp.pojo';

@Component({
  selector: "app-all-group",
  templateUrl: "./all-group.component.html",
  styleUrls: ["./all-group.component.css","../../../app.component.scss"]
})
export class AllGroupComponent implements OnInit {
  userResp:UserResp[];
  groupDetails: UserGroupResp[];
  verticalPosition: MatSnackBarVerticalPosition = "top";
  config = new MatSnackBarConfig();
  constructor(
    @Inject(RequestService) private services: RequestService,
    private modalService: NgbModal,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.config.verticalPosition = this.verticalPosition;
    this.config.duration = 2000;
    this.getGroups();
  }

  getGroups(){
    this.services.gettallGroups().subscribe((resposneData: resposneData) => {
      if (resposneData.statusCode == "000") {
        this.groupDetails = resposneData.data;
      } 
    });
  }

  deleteGroup(content) {
    this.modalService.open(content, { centered: true }).result.then(result => {
      if (result != "close") {
        this.services.deleteGroup(result).subscribe((data: any) => {
          if (data.statusCode == "000") {
            for (var i = 0; i < this.groupDetails.length; i++) {
              if (this.groupDetails[i].id == result) {
                this.groupDetails.splice(i, 1);
                this.config.panelClass = ["success-snackbar"];
                this.snackBar.open(data.statusMsg, "Close", this.config);
              }
            }
          } 
        });
      }
    });
  }
}
