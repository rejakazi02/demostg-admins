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
export class StudentService {

  constructor(private http: HttpClient) { }
  // , httpOptions:any, fd:any
  studentPost(stuAdd: any) {
    return this.http.post<any>(baseurl + 'students', stuAdd);
  
  }

  // unionData(unionname: any) {
  //   return this.http.get(baseurl + 'unions', unionname);
  // }

  SubSectionData(subSecType: any, select: any) {
    return this.http.get(baseurl + 'sections?class_id=' + select, subSecType);
  }

  studentList(class_id:any,section_id:any) {
    // return this.http.get<any>(baseurl + 'admin/institutes')
    return this.http.get(baseurl + 'students?class_id='+class_id+'&section_id='+section_id);
  }




  // dept data delete 
  deleteStudentData(data: string) {
    return this.http.delete(baseurl + 'departments/' + data);
  }



  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
