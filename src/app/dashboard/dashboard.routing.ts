import { Routes } from '@angular/router';
import { Permissions } from '../service/permission.service';
import { AddGroupComponent } from './maintenance/add-group/add-group.component';
import { AddUserComponent } from './maintenance/add-user/add-user.component';
import { AllGroupComponent } from './maintenance/all-group/all-group.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { DashboardComponent } from './dashboard.component';
import { AllUserComponent } from './maintenance/all-user/all-user.component';
import { AboutComponent } from './about/about.component';
import { UserdetailComponent } from './maintenance/all-user/userdetail/userdetail.component';
import { UserpermissiondetailComponent } from './maintenance/all-group/userpermissiondetail/userpermissiondetail.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumbs: ''
    },
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'maintenance',
        component: MaintenanceComponent,
        data: {
          breadcrumbs: 'Maintenance',
          roles:"CSR MANAGEMENT"
        },
        children: [
          
          {
            path: 'alluser',
            canActivate: [Permissions],
            data: {
              breadcrumbs: 'All User',
              roles: 'VIEW_USER_DETAILS'
            },
            children: [
              {
                path: '',
                component: AllUserComponent,
              },
              {
                path: 'userdetails/:id',
                component: UserdetailComponent,
                canActivate: [Permissions],
                data: {
                  breadcrumbs: 'User Details',
                  roles: "UPDATE_USER_DETAILS"
                }
              }]
          },
          {
            path: 'adduser',
            component: AddUserComponent,
            canActivate: [Permissions],
            data: {
              breadcrumbs: 'Add User',
              roles: "CREATE_USER"
            }
          },
          {
            path: 'creategroup',
            component: AddGroupComponent,
            canActivate: [Permissions],
            data: {
              breadcrumbs: 'Create Group',
              roles: "CREATE_USER_GROUP"
            }
          },
          {
            path: 'allgroup',
            canActivate: [Permissions],
            data: {
              breadcrumbs: 'Groups',
              roles: "VIEW_USER_GROUP"
            },
            children: [
              {
                path: '',
                component: AllGroupComponent,
              },
              {
                path: 'permissiondetails/:id',
                component: UserpermissiondetailComponent,
                canActivate: [Permissions],
                data: {
                  breadcrumbs: 'Permission Details',
                  roles: "UPDATE_USER_GROUP"
                }
              }]
          },
          {
            path: '',
            redirectTo: '/dashboard/maintenance/allgroup',
          },
        ]
      },
      {
        path: 'changepassword',
        component: ChangepasswordComponent,
        data: {
          breadcrumbs: 'Change Password',
          roles:'profile-menu'
        }
      },
    {
      path: 'about',
      component: AboutComponent,
      data: {
        breadcrumbs: 'About',
        roles:'profile-menu'
      }
    }]
  }
];
