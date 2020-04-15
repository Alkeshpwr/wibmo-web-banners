import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TimeoutError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
 
  constructor(

  ) { }

  public getHeadersurlencoded() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    return httpOptions;
  }

   // to accept response type as json 
   public getHeadersurlwithToken() {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'authorization': 'my-auth-token'
    })
    };
    return httpOptions;
  }
  
  public getHeadersurll(token) {
    const httpOptions = {
      headers: new HttpHeaders({ 'authorization': 'Bearer '+token })
    };
    return httpOptions;
  }

  // to accept response type as json 
  public getHeadersurl() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
    return httpOptions;
  }

  // to accept response type as blob i.e csv and zip file 
  public getHeadersurlblob() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: "Blob" as 'text'
    };
    return httpOptions;
  }

public handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    // console.error('An error occurred:', error.error.message);
    alert('An error occurred:'+ error.error.message)
  } else if (error.error instanceof TimeoutError) {
    // A client-side connection time out. Handle it accordingly.
    return throwError('Timeout Exception');
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    // console.error(
    //   `Backend returned code ${error.status}, ` +
    //   `body was: ${error.error}`);
      alert('Something bad happened; please try again later.')
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

}
