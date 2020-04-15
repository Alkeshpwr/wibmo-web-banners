import { HttpClient,HttpHeaders ,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { UtilityService } from '../../service/utility.service';
import { UrlsService } from '../../service/urls.service';
import { reportReq } from '../../models/reportReq.pojo';

@Injectable({
  providedIn: 'root'
})
export class AccountHolderServiceService {

  constructor(
    private http: HttpClient,
    private utilityService:UtilityService,
    private urlsService:UrlsService
  ) { }

    public manageDeviceDelete(data){
      // console.log(data);
      return this.http.post(this.urlsService.manageUserDeviceUrl, data, this.utilityService.getHeadersurl())
    }
  
   public resetUser(datas) {
    const data = new HttpParams().set('userId', datas);
    return this.http.post(this.urlsService.resetUserUrl ,data, this.utilityService.getHeadersurlencoded() )
   }

   public viewProfileMethod(data) {
    return this.http.post(this.urlsService.viewProfileUrl ,data, this.utilityService.getHeadersurl() )
 }

 public blockUser(datas) {
  const data = { "userId": datas.userId, "newStatus": datas.newStatus, "badTryCount": datas.badTryCount }
  return this.http.post(this.urlsService.BlockerUsersUrl, data, this.utilityService.getHeadersurl())
    
}

}
  