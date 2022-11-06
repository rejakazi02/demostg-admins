import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap, switchMap } from 'rxjs/operators';
import { catchError, throwError } from 'rxjs';
import { TokenService } from './token.service';

let baseurl = ' https://api.omegaitsys.com/api/v1/';

@Injectable({
  providedIn: 'root',
})
export class InstituteAddService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  insttePost(signUpPayload: any) {
    return this.http.post<any>(baseurl + 'admin/institutes', signUpPayload);
  }


  unionData(unionname: any) {
    return this.http.get(baseurl + 'unions', unionname);
  }

  CatData(CatType: any) {
    return this.http.get(baseurl + 'root-categories', CatType);
  }

  SubCatData(subCatType: any, select: any) {
    return this.http.get(baseurl + 'root-sub-categories/' + select, subCatType);
  }

   //Global token
   IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
