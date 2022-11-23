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

let baseurl = ' https://api.omegaitsys.com/api/v1/institute/';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  deptPost(dptadd: any) {
    return this.http.post<any>(baseurl + 'departments', dptadd);
  }

  departList() {
    // return this.http.get<any>(baseurl + 'admin/institutes')
    return this.http.get(baseurl + 'departments');
  }

  // dept data delete
  deleteDepData(data: string) {
    return this.http.delete(baseurl + 'departments/' + data);
  }
  //Global token
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
