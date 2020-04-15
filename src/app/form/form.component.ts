import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder
} from "@angular/forms";
import {
  MatSnackBarConfig,
  MatSnackBar,
  MatSnackBarVerticalPosition
} from "@angular/material";
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { InitService } from "../service/init.service";
export const APP_DATE_FORMATS = {
  parse: {
    dateInput: "DD/MMMM/YYYY"
  },
  display: {
    dateInput: "DD, MMMM, YYYY",
    monthYearLabel: "MMMM, YYYY",
    dateA11yLabel: "DD/MMMM/YYYY",
    monthYearA11yLabel: "DD/MMMM/YYYY"
  }
};
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: APP_DATE_FORMATS
    }
  ]
})
export class FormComponent implements OnInit {
  csrForm: any;
  @Input("csrForm") group: any;
  @Input("searchForm") searchForm: boolean;
  @Output() getForm = new EventEmitter<any>();
  @ViewChild("picker", { static: false }) picker;
  verticalPosition: MatSnackBarVerticalPosition = "top";
  config = new MatSnackBarConfig();
  fromMinDate = new Date(2016, 0, 1);
  fromMaxDate = new Date();
  toMinDate = new Date();
  toMaxDate = new Date();
  searchstringoption: string = "number";
  panelOpenState: boolean = false;
  constructor(
    private initService: InitService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.config.verticalPosition = this.verticalPosition;
    this.config.duration = 2000;
    let currentMonth = new Date().getMonth().toString();
    if (currentMonth.length == 1) {
      currentMonth = "0" + new Date().getMonth();
    }
    let fGroup = {};
    if (this.group.indexOf("createdMonth") > -1)
      fGroup["createdMonth"] = new FormControl(
        currentMonth,
        Validators.required
      );
    if (this.group.indexOf("createdYear") > -1)
      fGroup["createdYear"] = new FormControl(
        new Date().getFullYear().toString(),
        Validators.required
      );
    if (this.group.indexOf("fromDate") > -1)
      fGroup["fromDate"] = new FormControl(
        this.initService.toDate,
        Validators.required
      );
    if (this.group.indexOf("toDate") > -1)
      fGroup["toDate"] = new FormControl(
        this.initService.toDate,
        Validators.required
      );
    if (this.group.indexOf("fromDayTime") > -1)
      fGroup["fromDayTime"] = new FormControl(
        this.initService.getFromTime(),
        Validators.required
      );
    if (this.group.indexOf("toDayTime") > -1)
      fGroup["toDayTime"] = new FormControl(
        this.initService.getToTime(),
        Validators.required
      );

    if (this.group.indexOf("search_string_type") > -1)
      fGroup["search_string_type"] = new FormControl("1");

    if (this.searchForm) {
      if (this.group.indexOf("search_string_value") > -1)
        fGroup["search_string_value"] = new FormControl(null, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(this.initService.getMaxPhone())
        ]);
    } else {
      if (this.group.indexOf("search_string_value") > -1)
        fGroup["search_string_value"] = new FormControl(null, [
          Validators.minLength(10),
          Validators.maxLength(this.initService.getMaxPhone())
        ]);
    }

    if (this.group.indexOf("referralSearchType") > -1)
      fGroup["referralSearchType"] = new FormControl("0", Validators.required);
    if (this.group.indexOf("refereeSearchType") > -1)
      fGroup["refereeSearchType"] = new FormControl("0", Validators.required);
    if (this.group.indexOf("referralSearchString") > -1)
      fGroup["referralSearchString"] = new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(this.initService.getMaxPhone())
      ]);
    if (this.group.indexOf("refereeSearchString") > -1)
      fGroup["refereeSearchString"] = new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(this.initService.getMaxPhone())
      ]);

    if (this.group.indexOf("referralCode") > -1)
      fGroup["referralCode"] = new FormControl(null);

    if (this.group.indexOf("pcAccountNumber") > -1)
      fGroup["pcAccountNumber"] = new FormControl(null, [
        Validators.pattern("[A-Z]{2,2}[0-9]{12,12}")
      ]);
    if (this.group.indexOf("deviceId") > -1)
      fGroup["deviceId"] = new FormControl(null);
    if (this.group.indexOf("simId") > -1)
      fGroup["simId"] = new FormControl(null);
    if (this.group.indexOf("pcAccountNo") > -1)
      fGroup["pcAccountNo"] = new FormControl(null, [
        Validators.pattern("[A-Z]{2,2}[0-9]{12,12}"),
        Validators.required
      ]);

    if (this.group.indexOf("category") > -1)
      fGroup["category"] = new FormControl(null, Validators.required);

    if (this.group.indexOf("fundStatus") > -1)
      fGroup["status"] = new FormControl(null);

    if (this.group.indexOf("pttTxnId") > -1)
      fGroup["pttTxnId"] = new FormControl(null);

    if (this.group.indexOf("deviceType") > -1)
      fGroup["deviceType"] = new FormControl(null);

    if (this.group.indexOf("clientIP") > -1)
      fGroup["clientIP"] = new FormControl(null);

    if (this.group.indexOf("origTxnId") > -1)
      fGroup["origTxnId"] = new FormControl(null);

    if (this.group.indexOf("rootTxnId") > -1)
      fGroup["rootTxnId"] = new FormControl(null, Validators.required);

    if (this.group.indexOf("fundFlowType") > -1)
      fGroup["fundFlowType"] = new FormControl(null, Validators.required);

    if (this.group.indexOf("typeofTxn") > -1)
      fGroup["typeofTxn"] = new FormControl(null);

    if (this.group.indexOf("amount") > -1)
      fGroup["amount"] = new FormControl(null);

    if (this.group.indexOf("mobileNo") > -1)
      fGroup["mobileNo"] = new FormControl(null);

    if (this.group.indexOf("templateId") > -1)
      fGroup["templateId"] = new FormControl(null);

    if (this.group.indexOf("searchString2") > -1)
      fGroup["searchString2"] = new FormControl(null, [
        Validators.required,
        Validators.minLength(14)
      ]);

    if (this.group.indexOf("kycReportType") > -1)
      fGroup["kycReportType"] = new FormControl(null);

    if (this.group.indexOf("txnStatus") > -1)
      fGroup["txnStatus"] = new FormControl(null);

    if (this.group.indexOf("narration") > -1)
      fGroup["narration"] = new FormControl(null);

    if (this.group.indexOf("comments") > -1)
      fGroup["comments"] = new FormControl(null);

    if (this.group.indexOf("cardUnion") > -1)
      fGroup["cardUnion"] = new FormControl(null);

    if (this.group.indexOf("cardAssociationId") > -1)
      fGroup["cardAssociationId"] = new FormControl(null);

    if (this.group.indexOf("binStartRange") > -1)
      fGroup["binStartRange"] = new FormControl(null);

    if (this.group.indexOf("reportingEventDesc") > -1)
      fGroup["reportingEventDesc"] = new FormControl(null);

    if (this.group.indexOf("walletType") > -1)
      fGroup["walletType"] = new FormControl(null, Validators.required);

    if (this.group.indexOf("userIp") > -1) fGroup["userIp"] = new FormControl();
    if (this.group.indexOf("upiEvent") > -1)
      fGroup["upiEvent"] = new FormControl(null);
    if (this.group.indexOf("txnId") > -1)
      fGroup["txnId"] = new FormControl(null);

    if (this.group.indexOf("outflowTxnId") > -1)
      fGroup["outflowTxnId"] = new FormControl(null);

    if (this.group.indexOf("recipientAccessData") > -1)
      fGroup["recipientAccessData"] = new FormControl(null);

    if (this.group.indexOf("errorCode") > -1)
      fGroup["errorCode"] = new FormControl(null);

    if (this.group.indexOf("inflowtxnId") > -1)
      fGroup["inflowtxnId"] = new FormControl(null);
    if (this.group.indexOf("orgTxnId") > -1)
      fGroup["orgTxnId"] = new FormControl(null);
    if (this.group.indexOf("txnFlow") > -1)
      fGroup["txnFlow"] = new FormControl(null);
    if (this.group.indexOf("implType") > -1)
      fGroup["implType"] = new FormControl(null);
    if (this.group.indexOf("lblType") > -1)
      fGroup["lblType"] = new FormControl(null);
    if (this.group.indexOf("merchantName") > -1)
      fGroup["merchantName"] = new FormControl(null);
    if (this.group.indexOf("merchantID") > -1)
      fGroup["merchantID"] = new FormControl(null);
    if (this.group.indexOf("fieldSeparator") > -1)
      fGroup["fieldSeparator"] = new FormControl(null);
    if (this.group.indexOf("merchantTxnID") > -1)
      fGroup["merchantTxnID"] = new FormControl(null);
    if (this.group.indexOf("iapTxnID") > -1)
      fGroup["iapTxnID"] = new FormControl(null);
    if (this.group.indexOf("cardNumber") > -1)
      fGroup["cardNumber"] = new FormControl(null);
    if (this.group.indexOf("promoCode") > -1)
      fGroup["promoCode"] = new FormControl(null);
    if (this.group.indexOf("status") > -1)
      fGroup["status"] = new FormControl("-1");
    if (this.group.indexOf("requester_mobile_no") > -1)
      fGroup["requester_mobile_no"] = new FormControl(null, [
        Validators.minLength(10),
        Validators.maxLength(this.initService.getMaxPhone()),
        Validators.required
      ]);
    if (this.group.indexOf("recipient_mobile_no") > -1)
      fGroup["recipient_mobile_no"] = new FormControl(null, [
        Validators.minLength(10),
        Validators.maxLength(this.initService.getMaxPhone()),
        Validators.required
      ]);
    this.csrForm = new FormGroup(fGroup);
  }

  addEvent(event) {
    event = new Date(event);
    if (event) {
      this.picker.open();
      this.csrForm.controls.toDate.setValue(new Date(event));
      this.toMinDate = new Date(event);
      if (
        event.getMonth() == new Date().getMonth() &&
        event.getFullYear() == new Date().getFullYear()
      ) {
        this.toMaxDate = new Date(
          event.getFullYear(),
          event.getMonth(),
          new Date().getDate()
        );
      } else {
        let days = new Date(
          event.getFullYear(),
          event.getMonth() + 1,
          0
        ).getDate();
        this.toMaxDate = new Date(event.getFullYear(), event.getMonth(), days);
      }
    }
  }

  getCMonth(event) {
    let month = Number(event);
    let year = Number(this.csrForm.controls["createdYear"].value);
    let fristDate = new Date(year, month, 1);
    let lastDate = new Date(year, month + 1, 0);
    this.csrForm.controls.fromDate.setValue(fristDate);
    this.csrForm.controls.toDate.setValue(lastDate);
    this.fromMinDate = new Date(fristDate);
    this.fromMaxDate = new Date(lastDate);
    this.toMinDate = new Date(fristDate);
    this.toMaxDate = new Date(lastDate);
  }

  getCYear(event) {
    let year = Number(event);
    let month = Number(this.csrForm.controls["createdMonth"].value);
    let fristDate = new Date(year, month, 1);
    let lastDate = new Date(year, month + 1, 0);
    this.csrForm.controls.fromDate.setValue(fristDate);
    this.csrForm.controls.toDate.setValue(lastDate);
    this.fromMinDate = new Date(fristDate);
    this.fromMaxDate = new Date(lastDate);
    this.toMinDate = new Date(fristDate);
    this.toMaxDate = new Date(lastDate);
  }

  SendFormData(sendingData, formatType) {
    let data = JSON.parse(JSON.stringify(sendingData, this.replacer));
    data.format = formatType;
    if (!this.searchForm) {
      data.from_time = this.convertToMiliSeconds(
        new Date(data.fromDate),
        data.fromDayTime
      );
      data.to_time = this.convertToMiliSeconds(
        new Date(data.toDate),
        data.toDayTime
      );

      if (data.createdMonth) {
        let createdDate = new Date(data.createdYear, data.createdMonth);
        data.createdTime = createdDate.setHours(0, 0, 0);
        delete data["createdYear"];
        delete data["createdMonth"];
      }

      delete data["fromDayTime"];
      delete data["toDayTime"];
      delete data["toDate"];
      delete data["fromDate"];
      if (data.from_time > data.to_time) {
        this.config.panelClass = ["error-snackbar"];
        this.snackBar.open(
          "Please check with from time and to time!",
          "Close",
          this.config
        );
      } else {
        data.from_time = data.from_time.toString();
        data.to_time = data.to_time.toString();

        this.getForm.emit(data);
      }
    } else {
      this.getForm.emit(data);
    }
  }
  replacer(i, val) {
    if (val === "") {
      return null;
    } else {
      return val;
    }
  }
  convertToMiliSeconds(date, time) {
    time = time.split(":");
    if (!time[2]) {
      time[2] = "00";
    }
    return date.setHours(time[0], time[1], time[2]);
  }

  changeType(event, stringName) {
    if (event.value == "1") {
      this.searchstringoption = "number";

      if (this.searchForm) {
        this.csrForm.controls[stringName].setValidators([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(this.initService.getMaxPhone())
        ]);
      } else {
        this.csrForm.controls[stringName].setValidators([
          Validators.minLength(10),
          Validators.maxLength(this.initService.getMaxPhone())
        ]);
      }
      this.csrForm.controls[stringName].setValue(null);
    } else if (event.value == "2") {
      this.searchstringoption = "email";
      if (this.searchForm) {
        this.csrForm.controls[stringName].setValidators([
          Validators.required,
          Validators.email
        ]);
      } else {
        this.csrForm.controls[stringName].setValidators([Validators.email]);
      }
      this.csrForm.controls[stringName].setValue(null);
    } else if (event.value == "3") {
      this.searchstringoption = "text";
      if (this.searchForm) {
        this.csrForm.controls[stringName].setValidators([
          Validators.required,
          Validators.pattern("[A-Z]{2,2}[0-9]{12,12}")
        ]);
      } else {
        this.csrForm.controls[stringName].setValidators([
          Validators.pattern("[A-Z]{2,2}[0-9]{12,12}")
        ]);
      }
      this.csrForm.controls[stringName].setValue(null);
    } else {
      this.searchstringoption = "text";
      if (this.searchForm) {
        this.csrForm.controls[stringName].setValidators("", [
          Validators.required
        ]);
      } else {
        this.csrForm.controls[stringName].setValidators("");
      }
      this.csrForm.controls[stringName].setValue(null);
    }
  }
}
