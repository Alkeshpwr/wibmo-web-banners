import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Permissions } from "../../service/permission.service";
import { ManageUserDevicesComponent } from "./manageUserDevices/manageUserDevices.component";
export const AHroutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "userregistrationhistory",
        pathMatch: "full"
      },
      {
        path: "userregistrationhistory",
        canActivate: [Permissions],
        data: {
          roles: "USER_REG_HISTORY",
          breadcrumbs: "User Registration Report"
        },
        children: [
          {
            path: "",
           // component: UserRegistrationHistoryComponent,
            canActivate: [Permissions],
            data: {
              breadcrumbs: "User Registration Report",
              roles: "USER_REG_HISTORY"
            }
          },
          // {
          //   path: "userdetails/:id",
          //   component: RegistrationUserDetailsComponent,
          //   canActivate: [Permissions],
          //   data: {
          //     breadcrumbs: "Registration User Details",
          //     roles: "USER_REG_HISTORY"
          //   }
          // }
        ]
      },
      {
        path: "userloginreport",
        canActivate: [Permissions],
        //component: UserLoginReportComponent,
        data: {
          breadcrumbs: "User Login Report",
          roles: "USER_LOGIN_HISTORY"
        }
      },
         {
           path:'manageuserdevices',
           component:ManageUserDevicesComponent,
           canActivate: [Permissions],
           data:{
            roles:"MANAGE_USER_DEVICES",
            breadcrumbs: 'Manage User Device'
          }
         }

      //     {
      //       path:'impsuserregistrationhistory',
      //       component:ImpsUserRegistrationHistoryComponent,
      //       canActivate: [Permissions],
      //       data:{
      //         roles:3047,
      //        breadcrumbs: 'IMPS User Registration Report'
      //      }
      //     },
      //    {
      //      path:'blockunblockuser',
      //      component:BlockunblockuserComponent,
      //      canActivate: [Permissions],
      //      data:{
      //       roles:3093,
      //       breadcrumbs: 'Block Unblock User'
      //     }
      //    },
      //    {
      //     path:'searchuser',
      //     component:SearchWibmoUserComponent,
      //     canActivate: [Permissions],
      //     data:{
      //      breadcrumbs: 'Search User',
      //      roles:3042
      //    }
      //   },
      //   {
      //    path:'userloginreport',
      //    canActivate: [Permissions],
      //    component:UserLoginReportComponent,
      //    data:{
      //     breadcrumbs: 'User Login Report',
      //     roles:4091
      //   }
      //  },
      //  {
      //   path:'usererrorreport',
      //   canActivate: [Permissions],
      //   component:UserErrorReportComponent,
      //   data:{
      //    breadcrumbs: 'User Error Report',
      //    roles:4109
      //  }
      // },
      // {
      //   path:'userauditreport',
      //   canActivate: [Permissions],
      //   component:UserAuditReportComponent,
      //   data:{
      //    breadcrumbs: 'User Audit Report',
      //    roles:4119
      //  }
      // },
      // {
      //   path:'upireport',
      //   canActivate: [Permissions],
      //   component:UserUpiReportComponent,
      //   data:{
      //    breadcrumbs: 'User UPI Report',
      //    roles:4215
      //  }
      // },
      //    {
      //      path:'manageuserdevices',
      //      component:ManageUserDevicesComponent,
      //      canActivate: [Permissions],
      //      data:{
      //       roles:4126,
      //       breadcrumbs: 'Manage User Device'
      //     }
      //    },

      //    {
      //     path:'usersourcecardreport',
      //     component:UserSourceCardReportComponent,
      //     canActivate: [Permissions],
      //     data:{
      //      roles:3010,
      //      breadcrumbs: 'User Source Card'
      //    }
      //   },
      //   {
      //     path:'searchreferralcodeusers',
      //     component:SearchReferralCodeUsersComponent,
      //     canActivate: [Permissions],
      //     data:{
      //      roles:3044,
      //      breadcrumbs: 'Search Referral Code Users'
      //    }
      //   }
      //   ,
      //   {
      //     path:'channelreferralcode',
      //     component:ChannelReferalCodeComponent,
      //     canActivate: [Permissions],
      //     data:{
      //      roles:3045,
      //      breadcrumbs: 'Channel Referral Code'
      //    }
      //   },
      //   {
      //     path:'approveKycUpgrade',
      //     component:KYCUpgradeApprovalComponent,
      //     canActivate: [Permissions],
      //     data:{
      //      roles:3044,
      //      breadcrumbs: 'Fetch KYC upgrade request'
      //    }
      //   },
      //   {
      //     path:'promocodetxnreport',
      //     component:UserPromoCodeTxnReportComponent,
      //     canActivate: [Permissions],
      //     data:{
      //      roles:3092,
      //      breadcrumbs: 'Fetch Promo Code Txn Report'
      //    }
      //   },{
      //     path:'prepaidcardexpiry',
      //     component:PrepaidCardExpiryComponent,
      //     canActivate: [Permissions],
      //     data:{
      //      roles:4277,
      //      breadcrumbs: 'Notification Report'
      //    }
      //   },{
      //     path:'cardexpirycomparision',
      //     component:CardExpiryComparisionComponent,
      //     canActivate: [Permissions],
      //     data:{
      //      roles:4278,
      //      breadcrumbs: 'Card Expiry Comparision Report'
      //    }
      //   },{
      //     path:'cardbinreport',
      //     component:CardBinReportComponent,
      //     canActivate: [Permissions],
      //     data:{
      //      roles:4279,
      //      breadcrumbs: 'Card Bin Report'
      //    }
      //   },{
      //     path:'biometrickyc',
      //     component:BiometrickycComponent,
      //     canActivate: [Permissions],
      //     data:{
      //      roles:4265,
      //      breadcrumbs: 'Biometric KYC'
      //    }
      //   },{
      //     path:'biometrickycauditreport',
      //     component:BiometricAuditReportComponent,
      //     canActivate: [Permissions],
      //     data:{
      //      roles:4266,
      //      breadcrumbs: 'Biometric KYC Audit Report'
      //    }
      //   },
      //   {
      //     path:'sendwithprepaid',
      //     component:SendToPrepaidComponent,
      //     canActivate: [Permissions],
      //     data:{
      //      roles:8002,
      //      breadcrumbs: 'Sync Wallet Status with Prepaid'
      //    }
      //   },

      // {
      //   path:'physicalcardreport',
      //   component:PhysicalCardReportComponent,
      //   canActivate: [Permissions],
      //   data:{
      //    //roles:3044,
      //    breadcrumbs: 'Physical Card Report'
      //  }
      // },
      // {
      //   path:'userofferbannerreport',
      //   component:UserBannerReportComponent,
      //   canActivate: [Permissions],
      //   data:{
      //    roles:3044,
      //    breadcrumbs: 'User Banner Report'
      //  }
      // },
      // {
      //   path:'instacardofferapplynowauditreport',
      //   component:InstaCardOfferReport,
      //   canActivate: [Permissions],
      //   data:{
      //    roles:3044,
      //    breadcrumbs: 'Insta Card Offer Apply Now Audit Report'
      //  }
      // },
      // {
      //   path:'userlinkedaccountreport',
      //   component:UserLinkedAccountsComponent,
      //   canActivate: [Permissions],
      //   data:{
      //    roles:2003,
      //    breadcrumbs: 'User Source Account Report'
      //  }
      // },
      // {
      //   path:'userkycreport',
      //   component:KycReportComponent,
      //   canActivate: [Permissions],
      //   data:{
      //    roles:4267,
      //    breadcrumbs: 'User KYC Report'
      //  }
      // },
      // {
      //   path:'halfRegisteredUser',
      //   component:HalfRegisteredUserComponent,
      //   canActivate: [Permissions],
      //   data:{
      //    roles:3046,
      //    breadcrumbs: 'Half Registered User'
      //  }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AHroutes)],
  exports: [RouterModule]
})
export class AccountHolderRoutingModule {}
