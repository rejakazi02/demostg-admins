import { TeacherService } from './../../../service/teacher.service';
import { Component, OnInit } from '@angular/core';


import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.scss']
})
export class TeacherAddComponent implements OnInit {
  teacherAdd!:FormGroup;
  responceData: any;
  undata:any;
  unionName:any;
  errorMessage:any;
  constructor(private fb: FormBuilder,
    private teaService: TeacherService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.teacherAdd = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      department_id: ['', Validators.required],
      joining_date: ['', Validators.required],
     
      gender: ['', Validators.required],
      union_id: ['', Validators.required],
      present_address: ['', Validators.required],
      password: ['', Validators.required],
     
    });

this.unionData();

  }


  
  teaSubmit(){
    console.log("test", this.teacherAdd.value)
    this.teaService.teaPost(this.teacherAdd.value).subscribe((result) => {
      this.responceData = result;
   

      
      this.teacherAdd.reset();
      this.toastr.success(result.message);
          this.errorMessage=null;
        },
        (err)=>{
          this.errorMessage=err.error.errors;

          if(err.error.errors.name){
            this.toastr.error(err.error.errors.name);
          }
          if(err.error.errors.phone){
            this.toastr.error(err.error.errors.phone);
          }
          if(err.error.errors.department_id){
            this.toastr.error(err.error.errors.department_id);
          }
          if(err.error.errors.joining_date){
            this.toastr.error(err.error.errors.joining_date);
          }
          if(err.error.errors.gender){
            this.toastr.error(err.error.errors.gender);
          }
          if(err.error.errors.present_address_union_id){
            this.toastr.error(err.error.errors.present_address_union_id);
          }
          if(err.error.errors.present_address){
            this.toastr.error(err.error.errors.present_address);
          }
          if(err.error.errors.password){
            this.toastr.error(err.error.errors.password);
          }

      
         
        });
    
  }



  
  // union code chere

  unionData() {
    this.teaService.unionData(this.teacherAdd.value).subscribe({
      next: (result) => {
        this.undata = result;
        this.unionName = this.undata.data;
       
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
