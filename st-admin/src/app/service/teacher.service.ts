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
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  

  teaPost(teaAdd: any) {
    return this.http.post<any>(baseurl + 'teachers', teaAdd);
  }

  unionData(unionname: any) {
    return this.http.get(baseurl + 'unions', unionname);
  }



  teaList() {
    // return this.http.get<any>(baseurl + 'admin/institutes')
    return this.http.get(baseurl + 'teachers');
  }




  // dept data delete 
  deleteTeaData(data: string) {
    return this.http.delete(baseurl + 'departments/' + data);
  }
// token 
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
