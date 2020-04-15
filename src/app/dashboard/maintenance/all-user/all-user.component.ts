import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { RequestService } from "../../../service/request.service";
import {
  MatDialog,
  MatSnackBarVerticalPosition,
  MatSnackBarConfig,
  MatSnackBar,
  MatTableDataSource,
  MatPaginator
} from "@angular/material";
import { LoadingService } from "../../../loading/loading.service";
import { updatePassword } from "../update-password";
import { UserResp } from '../../../models/loginmodels/userResp.pojo';
import { resposneData } from '../../../models/response.pojo';
import { UserGroupResp } from '../../../models/allGroupResp.pojo';

@Component({
  selector: "app-all-user",
  templateUrl: "./all-user.component.html",
  styleUrls: ["./all-user.component.css", "../../../app.component.scss"]
})
export class AllUserComponent implements OnInit {
  allUserResp: UserGroupResp;
  userResp: UserResp[];
  singleUserResp : UserResp;
  verticalPosition: MatSnackBarVerticalPosition = "top";
  config = new MatSnackBarConfig();
  dataSource = new MatTableDataSource([]);
  columnsToBeDisplay: any = [];
  columns: any = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    @Inject(RequestService) private services: RequestService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private loading: LoadingService
  ) {
    this.singleUserResp = new UserResp();
  }

  ngOnInit() {
    this.loading.open();
    this.columnsToBeDisplay = [
      "User Id",
      "User Name",
      "User Login Name",
      "User status",
      "Bad Try Count",
      "Last Login Time",
      "View",
      "Change Password",
      "Delete"
    ];
    this.dataSource = new MatTableDataSource([]);

    this.config.verticalPosition = this.verticalPosition;
    this.config.duration = 2000;
    this.services.getAllUser().subscribe((resposneData: resposneData) => {
      this.loading.close();
      if (resposneData.statusCode == "000") {
        this.userResp  = resposneData.data;
        this.dataSource = new MatTableDataSource(this.userResp);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  updatePassword(element): void {
    const dialogRef = this.dialog.open(updatePassword);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.singleUserResp.loginName = element.loginName;
        this.singleUserResp.userPassword = result;
        this.services.updatePasswordFromAdmin(this.singleUserResp).subscribe((resposneData: resposneData) => {
          if (resposneData.statusCode == "000") {
            this.config.panelClass = ["success-snackbar"];
            this.snackBar.open(resposneData.statusMsg, "Close", this.config);
          }
        });
      }
    });
  }

  deleteUser(element): void {
    const dialogRef = this.dialog.open(DeleteUser);
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.services.deleteUser(element.loginName).subscribe((resposneData: resposneData) => {
          if (resposneData.statusCode == "000") {
            for (var i=0; i< this.userResp.length;i++){
              if (this.userResp[i].loginName == element.loginName){
                this.userResp[i].status = 0;
                this.config.panelClass = ["success-snackbar"];
                this.snackBar.open(resposneData.statusMsg, "Close", this.config);
              }
            }
          }
        });
      }
    });
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

@Component({
  selector: "delete-user",
  templateUrl: "../delete-user.html"
})
export class DeleteUser {}
