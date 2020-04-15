import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { LocalStorageService } from './localstorage.service';
import { UserResp } from '../models/loginmodels/userResp.pojo';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  fromDate= new Date();
  toDate = new Date();
  createdDate = new Date();
  //version = environment.version;
  searchByDropDown:[{"Mobile Number":"0", "Email Id":"1", "Account Number":"5"}];
  downloadString =  new Date().getFullYear()+""+("0"+(new Date().getMonth()+1)).slice(-2)+""+("0"+new Date().getDate()).slice(-2);
  userResp:UserResp;

  constructor(
    private localStorage :LocalStorageService
  ) { 

  }

  public  getFromTime() {
    this.userResp = this.localStorage.getUserData();
    var dt = new Date();
       dt.setHours( dt.getHours() - 2 );
    if (this.userResp.geoId == "ph") {
       var philTime = dt.toLocaleString("en-US", {timeZone: "Asia/Manila"});
       return new Date(philTime).toTimeString().split(' ')[0]
   } else {
       var indiaTime = dt.toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
       return new Date(indiaTime).toTimeString().split(' ')[0]
   }
}

public  getToTime() {
  this.userResp = this.localStorage.getUserData();
  if (this.userResp.geoId == "ph") {
     var philTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Manila"});
     return new Date(philTime).toTimeString().split(' ')[0]
 } else {
     var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
     return new Date(indiaTime).toTimeString().split(' ')[0]
 }
}

  public reportDate() {
    let date = new Date();
    return date.getFullYear+""+date.getDate+""+date.getMonth
  }

  public getMaxPhone():number{
    this.userResp = this.localStorage.getUserData();
    if(this.userResp.geoId == "ph"){
      return 15;
    } else {
      return 10;
    }
  }

  /*public getApiUrl(){
    if(environment.programName.toLowerCase() == ("BDO").toLowerCase()){
      return environment.apiUrl+"csr/ph/v3/"
    } else {
      return environment.apiUrl+"csr/in/v3/"
    }
  }*/

}
