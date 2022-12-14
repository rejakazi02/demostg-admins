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
let apiUrll = ' https://api.omegaitsys.com/api/v1/';



@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  teaPost(teaAdd: any) {
    return this.http.post<any>(baseurl + 'teachers', teaAdd);
  }

  unionData(unionname: any) {
    return this.http.get(apiUrll + 'unions', unionname);
  }

  teaList() {
    // return this.http.get<any>(baseurl + 'admin/institutes')
    return this.http.get(baseurl + 'teachers');
  }
  teaListForClass(teaName:any) {
    // return this.http.get<any>(baseurl + 'admin/institutes')
    return this.http.get(baseurl + 'teachers', teaName);
  }

  // teacher data delete
  deleteTeaData(data: any) {
    return this.http.delete(baseurl + 'teachers/' + data);
  }
  //Global token
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
