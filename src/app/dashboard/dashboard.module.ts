import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard.routing';

import { AddGroupComponent } from './maintenance/add-group/add-group.component';
import { AddUserComponent } from './maintenance/add-user/add-user.component';
import { AllGroupComponent } from './maintenance/all-group/all-group.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AllUserComponent, DeleteUser } from './maintenance/all-user/all-user.component';
import { AboutComponent } from './about/about.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { SearchUserFilter } from '../filters/searchuser.pipe';
import { SharedModule } from '../share.module';
import { UserdetailComponent } from './maintenance/all-user/userdetail/userdetail.component';
import { UserpermissiondetailComponent } from './maintenance/all-group/userpermissiondetail/userpermissiondetail.component';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../angular-material';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material';
import { updatePassword } from './maintenance/update-password';

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    NgxPaginationModule,
    SharedModule,
    MaterialModule,
    MatCardModule,
    MatDialogModule,
    
    ],
  declarations: [
    MaintenanceComponent,
    AddUserComponent,
    AllGroupComponent,
    UserpermissiondetailComponent,
    ChangepasswordComponent,
    AddGroupComponent,
    AllUserComponent,
    AboutComponent,
    UserdetailComponent,
    SearchUserFilter,
    DashboardComponent,
    DeleteUser,
    updatePassword
  ],
  entryComponents: [
    DeleteUser,
    updatePassword
  ],
 
})

export class DashboardModule {
}
