import { Injectable } from "@angular/core";
import { InitService } from "./init.service";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class UrlsService {

  public domainurl:string = environment.apiUrl;
  public initUrl:string = this.domainurl+"init";
  public authenticateUrl:string = this.domainurl+"token"
  public getUserUrl:string = this.domainurl+"users";
  public getallGroupsUrl:string = this.domainurl + "userGroup";
  public renewTokenUrl: string = this.domainurl + "renewToken";
  public userUpdateUrl: string = this.domainurl + "users";
  public logoutUrl: string = this.domainurl + "users/logout";
  public permissionByGroupUrl: string = this.domainurl + "userGroup/findById";
  public allPermissionUrl: string = this.domainurl + "report/ud";
  public updatePermissionUrl: string = this.domainurl + "userGroup";
  public reportListUrl: string = this.domainurl + "report/genReport";
  public manageUserDeviceUrl: string = this.domainurl + "manageDevices/del";
  public userUpdatePasswordFromAdminUrl: string = this.domainurl + "users/changePasswordFromAdmin";
  public changepasswordUrl: string = this.domainurl + "users/changePasswordForSelf";

  // old files 
  //public apiUrl = this.initService.getApiUrl();
  public apiUrl = "";
  public getBlockerUsersUrl: string = this.apiUrl + "user/profile";
  public BlockerUsersUrl: string = this.apiUrl + "user/blockUnblock";
  public deleteUserDeviceUrl: string = this.apiUrl + "user/deleteTrustedDevice";
  public getUserDeviceListUrl: string = this.apiUrl + "user/fetchUserDevices";
  public userRegistrationHistoryUrl: string = this.apiUrl + "userReg/report";
  public viewProfileUrl: string = this.apiUrl + "userReg/viewProfile";
  public validateDobUrl: string = this.apiUrl + "validate/Dob";
  public moreUserInfoUrl: string = this.apiUrl + "showMoreInfo";
  public cardExpiryExtensionUrl: string = this.apiUrl + "card/expiry/extend";
  public activateWalletUrl :string = this.apiUrl + "user/activateWallet";
  public impsusrregUrl: string = this.apiUrl + "impsReg/report";
  public resetUserUrl: string = this.apiUrl + "reset/securityProfile";
  public blockedUnBlockLinkedCardUrl: string =
    this.apiUrl + "blockUnblock/linkedCard";
  public fetchUserDetailsUrl: string = this.apiUrl + "csrUser/fetchDetails";
  public getAllUserUrl: string = this.apiUrl + "csrUser/fetch/allUser";
  public UserLoginReportUrl: string = this.apiUrl + "user/loginReport";
  public prepaidCardExpiryNotifiactionReportUrl: string = this.apiUrl + "card/expiry/notification";
  public prepaidCardExpiryComparisionReportUrl: string = this.apiUrl + "card/expiry/comparison";

  public getSaltsUrl: string = this.apiUrl + "user/auth/salt";
  public userloginUrl: string = this.apiUrl + "user/auth/login";
  public getUserSourceCardList: string = this.apiUrl + "user/linkedcard/getAll";
  public deleteUserCardUrl: string = this.apiUrl + "user/linkedcard/delete";
  public searchReferralCodeUsersUrl: string =
    this.apiUrl + "user/referralCodeChannel/getReferralCodeUsers";
  public referalCodeUrl: string = this.apiUrl + "user/referralCodeChannel/";
  public updateReferalCodeUrl: string =
    this.apiUrl + "user/referralCodeChannel/update/";
  public addReferalCodeUrl: string =
    this.apiUrl + "user/referralCodeChannel/add";
  public deleteReferalCodeUrl: string =
    this.apiUrl + "user/referralCodeChannel/delete";

  public validaOtpUrl: string = this.apiUrl + "user/auth/validateOtp";
  public sendOtpUrl: string = this.apiUrl + "user/auth/sendOtp";

  public userErrorReportUrl: string = this.apiUrl + "user/errorReport";
  public userAuditReportUrl: string = this.apiUrl + "user/auditReport";
  public userUPIReportUrl: string = this.apiUrl + "user/upiReport";
  public userPromoCodeReportUrl: string = this.apiUrl + "promotxn/get";
  // public kycLimitUrl: string = this.apiUrl + "user/kycLimits";
  public iaptxnReportUrl: string = this.apiUrl + "inapp/iapTxn";

  public blackListAddBackAccountUrl: string =
    this.apiUrl + "/blacklist/bankAccountNo/add";

  public userLinkedAccUrl: string =
    this.apiUrl + "user/linkedcard/bankAccounts";

  /********* Blacklist Device API URLS */
  public fetchDeviceUrl: string = this.apiUrl + "blacklist/deviceId/listAll";
  public addDeviceUrl: string = this.apiUrl + "blacklist/deviceId/add";
  public searchDeviceUrl: string = this.apiUrl + "blacklist/deviceId/search";
  public deleteDeviceURL: string = this.apiUrl + "blacklist/deviceId/delete";
  /********* Blacklist Sim API URLS */
  public fetchSimsListUrl: string = this.apiUrl + "blacklist/simId/listAll";
  public addSimsUrl: string = this.apiUrl + "blacklist/simId/add";
  public searchSimsUrl: string = this.apiUrl + "blacklist/simId/search";
  public deleteSimsURL: string = this.apiUrl + "blacklist/simId/delete";
  /*******BlackList clientIP API URLs */
  public fetchClientIPUrl = this.apiUrl + "blacklist/clientIp/listAll";
  public addClientIPUrl = this.apiUrl + "blacklist/clientIp/add";
  public searchClientIPUrl: string = this.apiUrl + "blacklist/clientIp/search";
  public deleteClientIPUrl: string = this.apiUrl + "blacklist/clientIp/delete";

  // Iap merchnat url
  createiapMerchantUrl: string = this.apiUrl + "iap/create/merchant";
  viewiapMerchantUrl: string = this.apiUrl + "iap/view/merchant";
  searchiapMerchantUrl: string = this.apiUrl + "iap/fetch/merchants";
  updateiapMerchantUrl: string = this.apiUrl + "iap/update/merchant";
  deleteiapMerchantUrl: string = this.apiUrl + "iap/delete/merchant";

  // carbinFetch
  public cardBinReportUrl: string = this.apiUrl + "cardbin/fetch";
  public cardBinEditReportUrl:string = this.apiUrl + "cardbin/update";
  public addBinCardUrl:string= this.apiUrl + "cardbin/addition";
  //Tarnasaction

  //biometric Report 
  public biometricReportUrl: string = this.apiUrl + "kyc/pbkycdetails";

  public biometricAuditReportUrl: string = this.apiUrl + "kyc/pbkycauditdetails";

  cardSendMoneyListUrl: string = this.apiUrl + "transactions/fetch/cardSend";
  public inflowTransHistoryUrl: string =
    this.apiUrl + "transactions/fetch/inflowTxnHistory";
  public inflowKillSessionUrl: string =
    this.apiUrl + "transactions/killSession";
  public outflowTransHistoryUrl: string =
    this.apiUrl + "transactions/fetch/outflowTxnHistory";
  public sendMoneyTransHistoryUrl: string =
    this.apiUrl + "transactions/fetch/sendMoney";
    public unclaimedFundsUrl: string =
    this.apiUrl + "transactions/unclaimedfund";
    
  public qrTransHistoryUrl: string = this.apiUrl + "transactions/QRReport";
  public requestMoneyUrl: string = this.apiUrl + "transactions/requestMoney";
  public splitBillUrl: string = this.apiUrl + "transactions/splitBill";
  public amTransHistoryUrl: string = this.apiUrl + "transactions/am";
  public impsTxnListUrl: string =
    this.apiUrl + "transactions/impsflowTxnHistory";
  public pcTransHistoryUrl: string = this.apiUrl + "transactions/pctxn/search";
  public cashBackReportUrl: string = this.apiUrl + "transactions/cashback";

  // IAP transactions

  issueriaptxnReportUrl: string = this.apiUrl + "inapp/issuerIapTxn";
  pcIapTxnReportUrl: string = this.apiUrl + "inapp/pcIapTxn";
  pcMvisaTxnReportUrl: string = this.apiUrl + "inapp/pcMvisaTxn";

  // Pan validation
  public panReportUrl: string = this.apiUrl + "user/panValidation/status";

  // Onlin Kyc
  public kycExceptionUrl: string = this.apiUrl + "kyc/ekyc/exceptionreport";

  // Tools
  public assetGroupUrl: string = this.apiUrl + "asset/assetGroup";
  public assetFunctionUrl: string = this.apiUrl + "asset/assetFunction";
  public assetCreateUrl: string = this.apiUrl + "asset/create";
  public assetFetchUrl: string = this.apiUrl + "asset/fetch";
  public inPcParameterUrl: string = this.apiUrl + "parameters/inPcParameter";
  public gbParameterUrl: string = this.apiUrl + "parameters/gbParameter";
  public velocityDefinitionsUrl: string =
    this.apiUrl + "parameters/velocityDefinitions";
  public updateAssetsUrl: string = this.apiUrl + "asset/update";
  public uploadCertiUrl: string = this.apiUrl + "asset/update/certificate";
  public sendToPrepaidUrl :string = this.apiUrl+"sync/walletStatus";
  public userKycReportUrl:string = this.apiUrl+"kyc/history";
  public halfRegisteredUserReportUrl: string = this.apiUrl+"user/half/register";
  public halfregisterUpdateDob: string = this.apiUrl+"user/halfregister/updateDob";
  public wildflyRestartUrl:string = this.apiUrl+"util/restartCsr";
// system Functionalities

public creditDebitUrl: string = this.apiUrl + "util/restartCsr";

  constructor(private initService: InitService) {}
}
