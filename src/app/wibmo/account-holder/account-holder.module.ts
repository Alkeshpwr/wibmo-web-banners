import { CommonModule } from "@angular/common";
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AccountHolderRoutingModule } from "./account-holder-routing";
import { ManageUserDevicesComponent } from "./manageUserDevices/manageUserDevices.component";
import { SharedModule } from "../../share.module";
import{ MaterialModule } from '../../angular-material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AccountHolderServiceService } from "./account-holder-service.service";

@NgModule({
  imports: [
    CommonModule,
    AccountHolderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
    SharedModule,
    MaterialModule,
    PerfectScrollbarModule,
    
  ],
  declarations: [
    ManageUserDevicesComponent,
    
  ],
  exports:[],
  entryComponents: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ],
  providers: [AccountHolderServiceService],
})
export class AccountHolderModule {}
