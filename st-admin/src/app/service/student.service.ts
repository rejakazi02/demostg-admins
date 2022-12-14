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
export class StudentService {
  constructor(private http: HttpClient) {}
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
// section and class by student list 
  studentList(class_id: any, section_id: any) {
    // return this.http.get<any>(baseurl + 'admin/institutes')
    return this.http.get(baseurl + 'students?class_id=' + class_id + '&section_id=' + section_id);
  }

// only student id by list 
  singleStudentList(single_student_id: any) {
    
    return this.http.get(
      baseurl + 'students/' + single_student_id);
  }

// student data update 

getStuDataBySlug(slug: any){
  
  return this.http.get(baseurl + 'students/' + slug);
  console.log('data',baseurl + 'students/' + slug);
  
  
}


stuDataUpdate(data: any, stud_id: any) {
  return this.http.post<any>(baseurl + 'students/' + stud_id, data);
}





  // student data delete
  deleteStudentData(data: any) {
    return this.http.delete(baseurl + 'students/' + data);
  }

  //Global token
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
