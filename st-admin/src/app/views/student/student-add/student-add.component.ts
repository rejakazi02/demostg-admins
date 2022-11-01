import { StudentService } from './../../../service/student.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { ClassService } from 'src/app/service/class.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {


 
  studentAdd:any;
  errorMessage:any;
  responceData:any;
  subSectionData:any;
  classDatas:any;
  constructor(
    private fb: FormBuilder,
    private stuService: StudentService,
    private classService: ClassService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ) { }

  ngOnInit(): void {
    this.studentAdd = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      admission_date: ['', Validators.required],
      
      class_id: [this.data.claData, Validators.required],
      section_id: [this.data.secData, Validators.required],
      image: [''],
   
     
    
     
    });

this. classData();


  }

  studentSubmit(){
    console.log("test", this.studentAdd.value)
 
    this.stuService.studentPost(this.studentAdd.value).subscribe((result) => {
      this.responceData = result;
      console.log('responceData', this.responceData);

      
      this.studentAdd.reset();
      this.toastr.success(result.message);
          this.errorMessage=null;
        },
        (err)=>{
          this.errorMessage=err.error.errors;
          this.toastr.error(err.error.errors.name);
          // alert(err.error.message)
        });
    
  }




  classData(){
    this.classService.classData().subscribe((result)=>{
      
      this.classDatas = result;
      console.log('class', this.classDatas)
    })
  }

  getSection(select: any) {
    this.stuService
      .SubSectionData(this.studentAdd.value, select.value)
      .subscribe((result) => {
        this.subSectionData = result;
        console.log('section14', this.subSectionData);
        
       
      });
  }








}
