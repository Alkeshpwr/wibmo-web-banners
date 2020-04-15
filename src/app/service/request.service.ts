import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import 'rxjs/Rx';
import { UtilityService } from './utility.service';
import { UrlsService } from './urls.service';
import { UserResp } from '../models/loginmodels/userResp.pojo';

@Injectable()
export class RequestService   {

  constructor(
    private http: HttpClient,
    private utilityService:UtilityService,
    private urlsService:UrlsService
  ) {}

  gettallGroups() {
    return this.http.get(this.urlsService.getallGroupsUrl)
  }

  getToken(username: string) {
    const data = new HttpParams().set('username', username);
    return this.http.post(this.urlsService.getSaltsUrl, data, this.utilityService.getHeadersurlencoded()) 
       
  }

  renewToken(data) {
    return this.http.post(this.urlsService.renewTokenUrl,data, this.utilityService.getHeadersurl()) 
  }

  userLogin(data) {
    return this.http.post(this.urlsService.userloginUrl, data, this.utilityService.getHeadersurl()) 
       
  }

  gettallpermission() {
    return this.http.get(this.urlsService.allPermissionUrl)
      
  }

  updateUser(data:any) {
    return this.http.put(this.urlsService.userUpdateUrl+"/"+data.loginName, data, this.utilityService.getHeadersurl())
  }

  updatePasswordFromAdmin(data:any) {
    return this.http.post(this.urlsService.userUpdatePasswordFromAdminUrl, data, this.utilityService.getHeadersurl())
  }

  registerUser(data: any) {
    return this.http.post(this.urlsService.userUpdateUrl, data, this.utilityService.getHeadersurl())
  }

  gettPermissionByGroup(groupId: string) {
    return this.http.get(this.urlsService.permissionByGroupUrl+"/"+groupId)
  }

  changePasswordforSelf(data) {
    return this.http.post(this.urlsService.changepasswordUrl, data, this.utilityService.getHeadersurl())
      
  }

  logout(datas:UserResp) {
    return this.http.post(this.urlsService.logoutUrl+"/"+datas.loginName, '', this.utilityService.getHeadersurl())
      
  }

  updatePermission(datas) {
    return this.http.put(this.urlsService.updatePermissionUrl+"/"+datas.groupId, datas, this.utilityService.getHeadersurl())
  }

  deleteGroup(groupId) {
    return this.http.delete(this.urlsService.updatePermissionUrl+"/"+groupId)
  }

  deleteUser(userId) {
    return this.http.delete(this.urlsService.userUpdateUrl+"/"+userId)
  }

  createGroup(datas) {
    return this.http.post(this.urlsService.updatePermissionUrl, datas, this.utilityService.getHeadersurl())
      
  }

  getAllUser() {
    return this.http.get(this.urlsService.getUserUrl)
  }

  userPromoCodeReport(data) {
    if(data.outputType == "json") {
      return this.http.post(this.urlsService.userPromoCodeReportUrl ,data, this.utilityService.getHeadersurl() )
      
    } else {
      return this.http.post(this.urlsService.userPromoCodeReportUrl ,data, this.utilityService.getHeadersurlblob() )
      
    }
  }

  // kycLimit(datas){
  //   const data = new HttpParams().set("kyc", datas.kyc);
  //   return this.http.post(this.urlsService.kycLimitUrl ,data, this.utilityService.getHeadersurlencoded() )
  // }

 fetchUserDetails(data) {
  const datas = new HttpParams().set('csrUserId', data.userId);
  return this.http.post(this.urlsService.fetchUserDetailsUrl,datas, this.utilityService.getHeadersurlencoded() )
 }

 validateOtp(data){
  return this.http.post(this.urlsService.validaOtpUrl,data, this.utilityService.getHeadersurl() )
  
 }

 sendOtpservice(data){
  const datas = new HttpParams().set('userId', data.userId).set('programId', data.programId);
  return this.http.post(this.urlsService.sendOtpUrl,datas, this.utilityService.getHeadersurlencoded() )
  
 }

 blackListAddBackAccount(data) {
  return this.http.post(this.urlsService.blackListAddBackAccountUrl,data, this.utilityService.getHeadersurl() )
  
 }

 panHistoryReport(data){
  if(data.outputType == "json"){
    return this.http.post(this.urlsService.panReportUrl,data,this.utilityService.getHeadersurl())
    
   }else{
     return this.http.post(this.urlsService.panReportUrl,data,this.utilityService.getHeadersurlblob() )
     
   }
 }

}
