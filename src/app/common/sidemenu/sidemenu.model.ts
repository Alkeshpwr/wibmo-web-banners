import{ AHroutes } from '../../wibmo/account-holder/account-holder-routing';
import { TRroutes } from '../../wibmo/transactions/transactions-routing.module';
import { ebillRoutes } from '../../wibmo/ebill/ebill-routing.module';
export const subLinks = {
   "accountholder" :AHroutes[0].children,
   "transactions" :TRroutes[0].children,
//    "iaptransactions":IAProutes[0].children,
//    "iapmerchant":IAPMroutes[0].children,
//    "blacklisting":BLroutes[0].children,
//    "panvalidation":panroutes[0].children,
   "ebill":ebillRoutes[0].children,
//    "onlinekycreport":onlinRoutes[0].children,
//    "tools":ToolsRoutes[0].children,
//    "systemfunctionalities":systemfunctionalitiesRoutes[0].children
};
