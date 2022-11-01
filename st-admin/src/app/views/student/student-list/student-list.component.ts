import { StudentService } from './../../../service/student.service';
import { param } from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import {MatDialog} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { StudentAddComponent } from '../student-add/student-add.component';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  instData:any;
  classsId:any;
  classIdd:any;
  sectionId:any;
  studentListData:any;
  constructor(
    public dialog: MatDialog, 
    private activatedRoute: ActivatedRoute,
    private studentService:StudentService
 
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.sectionId=param.get('id')
  
     console.log(' this.sectionId',  this.sectionId)
    })
    this.activatedRoute.queryParamMap.subscribe(qParam => {
      this.classIdd=qParam.get('classId')
      console.log('   this.classIdd',this.classIdd)
    })
    this.studentList();
  }

  // studentList section 

  studentList() {
    this.studentService.studentList(this.classIdd,this.sectionId).subscribe((result) => {
    this.studentListData = result;

    console.log('studentListData',this.studentListData);
    
  });

}


  openDialog() {
    const dialogRef = this.dialog.open(StudentAddComponent, {
      data:{
      claData:this.classIdd,
      secData:this.sectionId
    }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
    
  }






  // delete section 
  confirmBox(id: string) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
        // this.classService.deleteClassData(id).subscribe((result) => {
        //   this.classtList();
        // });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
}
