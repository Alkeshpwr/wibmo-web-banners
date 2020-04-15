import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ParentPermissions } from '../service/parentPermission.service';

export const WibmoRoutes: Routes = [
  {
    path: "",
    data: {
      breadcrumbs: "Home",
      roles:"ACCOUNT_HOLDER"
    },
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "accountholder",
        canActivate: [ParentPermissions],
        data: {
          breadcrumbs: "Account Holders",
          roles:"ACCOUNT_HOLDER",
          icon:'account_circle'
        },
        loadChildren:
          () => import('./account-holder/account-holder.module').then(m => m.AccountHolderModule)
      },
      
      // {
      //   path: "iaptransactions",
      //   data: {
      //     breadcrumbs: "IAP Transactions",
      //     roles:3006,
      //     icon:'list_alt'
      //   },
      //   loadChildren:
      //     () => import('./iap-transactions/iap-transactions.module').then(m => m.IAPTransactionsModule)
      // }
      // ,
      // {
      //   path: "iapmerchant",
      //   data: {
      //     breadcrumbs: "IAP Merchant",
      //     roles:3005,
      //     icon:'style'
      //   },
      //   loadChildren:
      //     () => import('./iap-merchant/iap-merchant.module').then(m => m.IAPMerchantModule)
      // } ,
      // {
      //   path: "panvalidation",
      //   data: {
      //     breadcrumbs: "Pan Validation",
      //     roles:8004,
      //     icon:'assignment_ind'
      //   },
      //   loadChildren:
      //     () => import('./pan-validation/pan-validation.module').then(m => m.PanValidationModule)
      // },
      // {
      //   path: "ebill",
      //   data: {
      //     breadcrumbs: "Ebills",
      //     roles:"EBILL_REPORTS",
      //     icon:'receipt'
      //   },
      //   loadChildren:
      //     () => import('./ebill/ebill.module').then(m => m.EbillModule)
      // }
      // ,
      // {
      //   path: "blacklisting",
      //   data: {
      //     breadcrumbs: "Black Listing",
      //     roles:3211,
      //     icon:'block'
      //   },
      //   loadChildren:
      //     () => import('./black-listing/blacklisting.module').then(m => m.BlacklistingModule)
      // },
      // {
      //   path: "onlinekycreport",
      //   data: {
      //     breadcrumbs: "online kyc report",
      //     roles:4262,
      //     icon:'assignment'
      //   },
      //   loadChildren:
      //     () => import('./online-kyc-report/online-kyc-report.module').then(m => m.OnlineKycReportModule)
      // }
      // ,{
      //   path: "tools",
      //   loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule),
      //   data:{
      //     breadcrumbs: "tools",
      //     roles:8018,
      //     icon:'settings'
      //   },
      // }

      // ,{
      //   path: "systemfunctionalities",
      //   loadChildren: () => import('./system-functionalities/system-functionalities.module').then(m => m.SystemFunctionalitiesModule),
      //   data:{
      //     breadcrumbs: "System Functionalities",
      //     roles:4101,
      //     icon:'settings'
      //   },
      // }

    ]
  }
];
