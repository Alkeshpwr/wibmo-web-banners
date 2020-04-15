import { Component, OnInit} from "@angular/core";
import {ActivatedRoute } from '@angular/router';
import { reportReq } from '../../../models/reportReq.pojo';
import { LocalStorageService } from '../../../service/localstorage.service';
import { AccountHolderServiceService } from '../account-holder-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { userDeviceReq } from '../../../models/userDevice.pojo';
import { UserResp } from '../../../models/loginmodels/userResp.pojo';

@Component({
  selector: "app-manageUserDevices",
  templateUrl: "./manageUserDevices.component.html",
  styleUrls: ["./manageUserDevices.component.css", "../../../app.component.scss"]
})
export class ManageUserDevicesComponent implements OnInit {

  userFormValues: any = [];
  reportReq:reportReq;
  userDeviceReq:userDeviceReq
  userResp:UserResp;
  title:string;
  constructor(
    private route:ActivatedRoute,
    private localStorage:LocalStorageService,
    private service:AccountHolderServiceService,
    private modalService: NgbModal,

  ) {
  }

  ngOnInit() {
    this.reportReq = new reportReq();
    this.userDeviceReq = new userDeviceReq();
    this.userResp = this.localStorage.getUserData();
    this.reportReq.reportUIName = (this.route.snapshot.data["roles"])
    this.reportReq.reportId = (this.route.snapshot.data["roles"])
    this.title =(this.route.snapshot.data["breadcrumbs"])
    this.reportReq.programId = this.userResp.currentProgramIdSelected;
    this.reportReq.readFromDBOnly = "string";
    this.reportReq.geoId = this.userResp.geoId;
    this.userFormValues = ["search_string_type","search_string_value"];
  }

  deleteDevice(event:any){
  this.userDeviceReq.key = {
    deviceId : event.DEVICE_ID,
    deviceType: event.DEVICE_TYPE,
    programId: event.PROGRAM_ID,
    userId: event.USER_ID
  }
  this.service.manageDeviceDelete(this.userDeviceReq).subscribe((data:any)=>{
    console.log(data);
  })
  }

}
