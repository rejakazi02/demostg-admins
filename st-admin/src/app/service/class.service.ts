import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap, switchMap } from 'rxjs/operators';
import { catchError, throwError } from 'rxjs';
import { TokenService } from './token.service';

let baseurl = ' https://api.omegaitsys.com/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }


  classPost(dptadd: any) {
    return this.http.post<any>(baseurl + 'classes', dptadd);
  }


  classtList() {
    // return this.http.get<any>(baseurl + 'admin/institutes')
    return this.http.get(baseurl + 'classes');
  }
  classData() {
    // return this.http.get<any>(baseurl + 'admin/institutes')
    return this.http.get(baseurl + 'all-classes');
  }

  // dept data delete 
  deleteClassData(data: string) {
    return this.http.delete(baseurl + 'classes/' + data);
  }




// section api start here 



sectionPost(secAdd: any) {
  return this.http.post<any>(baseurl + 'sections', secAdd);
}



sectionData() {
  // return this.http.get<any>(baseurl + 'admin/institutes')
  return this.http.get<any>(baseurl + 'sections');
}

sectionList(ClassId: any) {
  // console.log("first", ClassId)
  // let params = new HttpParams();
  // if(ClassId) {
  //   params = params.append('ClassId', ClassId);
  // }
  // return this.http.get<any>(baseurl + 'admin/institutes')
  return this.http.get<any>(baseurl + 'sections?class_id='+ ClassId);
}



// dept data delete 
deleteSectionData(data: any, cId:any) {
  return this.http.delete(baseurl + 'sections/' + data + '?class_id='+ cId);
}





// Global token 
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
 