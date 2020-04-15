import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    public saveAuthData(authData:any):void {
        localStorage.setItem("authData", JSON.stringify(authData));
    }

    public getAuthData(){
        let authData = JSON.parse(localStorage.getItem('authData'));
        return authData == null ? null:authData;
    }

    public saveUserData(UserData:any):void {
        localStorage.setItem("userData", JSON.stringify(UserData));
    }

    public getUserData(){
        let userData = JSON.parse(localStorage.getItem('userData'));
        return userData == null ? null:userData;
    }

     public removeUserData(){
        return localStorage.clear();
      }
}