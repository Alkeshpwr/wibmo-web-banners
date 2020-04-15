
import {tap} from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { LocalStorageService } from './localstorage.service';
// import { RequestService } from './request.service';
import {MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarConfig} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  newRequest: any;
  returnURL;
  verticalPosition:MatSnackBarVerticalPosition = "top";
  sendData:any;
  constructor( 
    private LocalStorageService: LocalStorageService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    this.returnURL = this.router.url;
  }

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  let config = new MatSnackBarConfig();
  config.verticalPosition = this.verticalPosition;
  config.duration = 2000;
  config.panelClass = ['error-snackbar']
  const userdetails = this.LocalStorageService.getAuthData();
  // if(userdetails) {
  //     if(userdetails.data.jwttoken){
      this.newRequest = request.clone({ 
                setHeaders: {
                   'authorization': "Bearer "+userdetails.jwttoken,
                  }
            });
            return next.handle(this.newRequest).pipe(tap((event: any) => {
              if (event instanceof HttpResponse) {
                if(event.body.statusCode != "000") {
                  this.snackBar.open(event.body.statusMsg, "Close",config);
                }
              }
            }, (error:any) =>{
              if (error instanceof HttpErrorResponse) { 
                if(error.error == null){
                  this.snackBar.open(error.message, "Close",config);
                }else if(error.error.status == "401") {
                    this.LocalStorageService.removeUserData();
                    this.router.navigate(['login']);
                  }
                  if(error.error.exceptionMsg){
                    this.snackBar.open(error.error.exceptionMsg, "Close",config);
                  } else  if (error.error.statusMsg){
                    this.snackBar.open(error.error.statusMsg, "Close",config);
                  } else {
                    this.snackBar.open(error.error.message, "Close",config);
                  }
              }
            }))
    //       } else {
    //         return next.handle(request)
    //       }
    // } else {
    //   return next.handle(request)
    // }

  //   if (userdetails) {
  //     this.sendData = {
  //       userId: userdetails.userId,
  //       programId: userdetails.userProgram
  //     }
      
  //     this.newRequest = request.clone({ 
  //         setHeaders: {
  //             'token': userdetails.userToken
  //           }
  //     });
  //     return next.handle(this.newRequest).pipe(tap((event: any) => {
  //       if (event instanceof HttpResponse) {
  //     if(event.body.responseCode){
  //     if( event.body.responseCode == "408" || event.body.responseCode == "318") {
  //       this.services.logout(this.sendData).subscribe((data:any)=> {
  //       this.snackBar.open("Session Expired. Please login again", "Close",config);
  //       this.LocalStorageService.removeUserData();
  //       this.router.navigate(['login']);
  //       });
  //     } else if (event.body.responseCode != "000") {
  //       this.snackBar.open(event.body.responseDesc, "Close",config);
  //     }
  //     }
  //   }
  // }, (error:any)=>{
  //   if (error instanceof HttpErrorResponse) {
  //       this.snackBar.open("There was some internal server error. Please contact your admin!", "Close",config);
  //       this.loading.close();
  //   }
  // }))
  //     }
  //     else {
  //       return next.handle(request)
  //     } 
  }

}
