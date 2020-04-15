import { Component, OnInit, Inject } from "@angular/core";
import { LocalStorageService } from '../../service/localstorage.service';
import { UserResp } from '../../models/loginmodels/userResp.pojo';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  userResp:UserResp;
  constructor(
      private localService: LocalStorageService,
  ) {
    this.userResp = this.localService.getUserData();
  }
  ngOnInit() {
  }

}
