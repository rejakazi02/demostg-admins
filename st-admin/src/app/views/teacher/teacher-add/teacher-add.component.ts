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
  constructor(private fb: FormBuilder,
    private teaService: TeacherService
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
      console.log('responceData', this.responceData);

      this.teacherAdd.reset();
      alert(' Teacher Insert Successfull');
    
    });
    
  }



  
  // union code chere

  unionData() {
    this.teaService.unionData(this.teacherAdd.value).subscribe({
      next: (result) => {
        this.undata = result;
        this.unionName = this.undata.data;
        console.log('union data',  this.unionName)
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
