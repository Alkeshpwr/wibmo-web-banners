import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { AuthenticationRoutes } from "./authentication.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
//import{ MaterialModule } from '../angular-material';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { MaterialService } from '../service/material.service';
import { SharedModule } from "../share.module";
import { AuthenticationService } from "./authentication.service";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,

    //Ng2DeviceDetectorModule.forRoot(),
   //MaterialModule,
   //FlexLayoutModule,
   SharedModule
  ],
  //providers: [MaterialService, AuthenticationService ]
  providers: [ AuthenticationService ]
 
})
export class AuthenticationModule {}
