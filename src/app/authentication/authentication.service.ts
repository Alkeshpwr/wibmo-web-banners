import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import 'rxjs/Rx';
import { UtilityService } from '../service/utility.service';
import { UrlsService } from '../service/urls.service';
import { LoginReq } from '../models/loginmodels/loginReq.pojo';
import {MatFormFieldModule} from '@angular/material/form-field';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private httpWithoutInterceptor: HttpClient;

  constructor(
    private http: HttpClient,
    private httpBackend: HttpBackend,
    private utilityService:UtilityService,
    private urlsService:UrlsService
  ) { 
    this.httpWithoutInterceptor = new HttpClient(httpBackend);
  }

  initService() {
    //return this.httpWithoutInterceptor.get(this.urlsService.initUrl).catch(this.utilityService.handleError);
    return this.httpWithoutInterceptor.get(this.urlsService.initUrl);
  }

  userTokenService(data:LoginReq) {
    console.log("inside user token service authenticate.service.ts * ");
    return this.httpWithoutInterceptor.post(this.urlsService.authenticateUrl, data, this.utilityService.getHeadersurl() ) 
  }

  userAuthenticateService(userDetails:any) {
    console.log("inside user Auth service authenticate.service.ts * ");
    return this.http.get(this.urlsService.getUserUrl+"/"+userDetails.username, this.utilityService.getHeadersurll(userDetails.jwttoken) );
  }
  
}
