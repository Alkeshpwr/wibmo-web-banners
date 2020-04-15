import { Injectable } from '@angular/core';
import { CanActivate , Router } from '@angular/router';
import { LocalStorageService } from './localstorage.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarVerticalPosition } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class EnsureAuthenticated implements CanActivate {
  verticalPosition:MatSnackBarVerticalPosition = "top";
  config = new MatSnackBarConfig();
  constructor(
    private localStorage:LocalStorageService,
    private router:Router,
    private snackBar: MatSnackBar, 

  ) { }
  canActivate():boolean{
   if(this.localStorage.getUserData() && this.localStorage.getAuthData()){
     return true;
   } else {
    this.config = new MatSnackBarConfig();
    this.config.verticalPosition = this.verticalPosition;
    this.config.duration = 2000;
    this.config.panelClass = ["error-snackbar"];
    this.snackBar.open("Something Went Wrong!. Please Contact Admin", "Close",this.config);
     this.router.navigate(['login'])
     return false;
   }
    
  }

}

// import { Injectable, Inject } from '@angular/core';
// import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { RequestService } from '../service/request.service';

// @Injectable()
// export class EnsureAuthenticated implements CanActivate {
//   constructor( @Inject(RequestService) private services : RequestService, private router: Router) {}
//   canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
//     if (localStorage.getItem('user')) {
//     return true;
//     }
//     else {
//       this.router.navigate(['login']);
//       return false;
      
//     }

//   }
// }