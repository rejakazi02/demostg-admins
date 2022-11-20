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
  providedIn: 'root',
})
export class ClassService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  // classes api start here---------------------------------------------------------------

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

  // classes data delete
  deleteClassData(data: string) {
    return this.http.delete(baseurl + 'classes/' + data);
  }

  // section api start here---------------------------------------------------------------

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
    return this.http.get<any>(baseurl + 'sections?class_id=' + ClassId);
  }
// get section for student 

SubSectData(subCatType: any, select: any) {
  return this.http.get(baseurl + 'sections?class_id=' + select, subCatType);
}
SubSectDat( select: any) {
  return this.http.get(baseurl + 'sections?class_id=' + select);
}


  // sections data delete
  deleteSectionData(data: any, cId: any) {
    return this.http.delete(baseurl + 'sections/' + data + '?class_id=' + cId);
  }

  // class room section ---------------------------------------------------------------

  classRoomPost(classRoomAdd: any) {
    return this.http.post<any>(baseurl + 'rooms', classRoomAdd);
  }

  classRoomList() {
    return this.http.get<any>(baseurl + 'rooms');
  }

  // class room data delete
  deleteSclassRoomData(data: any) {
    return this.http.delete(baseurl + 'rooms/' + data);
  }

  //subject section ---------------------------------------------------------------

  subjectPost(subjectsAdd: any) {
    return this.http.post<any>(baseurl + 'subjects', subjectsAdd);
  }

  subjectList() {
    return this.http.get<any>(baseurl + 'subjects');
  }

  // subjects data delete
  deleteSubjectData(data: any) {
    return this.http.delete(baseurl + 'subjects/' + data);
  }


// section by teacher add -----------------------------------------------------------------------
// /section-sessions

teaSectionPost(teaSectionA: any) {
  return this.http.post<any>(baseurl + 'section-sessions', teaSectionA);
}

// routine Add ---------------------------------------------------------------------------------
routinePost(routineAdd: any) {
  return this.http.post<any>(baseurl + 'class-routines', routineAdd);
}


// class Routines List
classRoutinesList() {
  return this.http.get<any>(baseurl + 'class-routines');
}


// class-routines?class_id=3&section_id=1&weekday=4

classRoutinesSearch(clssId:any, secId:any, weekId:any) {
  return this.http.get<any>(baseurl + 'class-routines?class_id=' + clssId + '&section_id=' + secId + '&weekday=' + weekId);
}



// student data update 

getRoutineDataById(routId: any){
  
  return this.http.get(baseurl + 'class-routines/' + routId);
  console.log('data',baseurl + 'class-routines/' + routId);
  
  
}


routineDataUpdate(data: any, stud_id: any) {
  return this.http.put<any>(baseurl + 'class-routines/' + stud_id, data);
}



 // class-routines data delete
 deleteClassRoutineData(data: any) {
  return this.http.delete(baseurl + 'class-routines/' + data);
}


//exams routine Add ---------------------------------------------------------------------------------


examRoutinePost(examsAdd: any) {
  return this.http.post<any>(baseurl + 'exams', examsAdd);
}


// exam  Routines List
examRoutineList() {
  return this.http.get<any>(baseurl + 'exams');
}



// Exam data update 

getExamRoutineDataById(examsId: any){
  
  return this.http.get(baseurl + 'exams/' + examsId);
  // console.log('data',baseurl + 'class-routines/' + examsId);
  
  
}


examRoutineDataUpdate(data: any, exams_id: any) {
  return this.http.put<any>(baseurl + 'exams/' + exams_id, data);
}



 // class-routines data delete
 deleteExamRoutineData(data: any) {
  return this.http.delete(baseurl + 'exams/' + data);
}


  // Global token
  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
