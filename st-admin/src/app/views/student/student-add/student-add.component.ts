import { StudentService } from './../../../service/student.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { ClassService } from 'src/app/service/class.service';




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
    ) { }

  ngOnInit(): void {
    this.studentAdd = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      admission_date: ['', Validators.required],
      gender: ['', Validators.required],
      present_address: ['', Validators.required],
      permanent_address: ['', Validators.required],
      class_id: ['', Validators.required],
      section_id: ['', Validators.required],
      blood_group: ['', Validators.required],
      session: ['', Validators.required],
      roll_no: ['', Validators.required],
      date_of_birth: ['', Validators.required],
    
     
    });

this. classData();


  }

  studentSubmit(){
    console.log("test", this.studentAdd.value)
    this.stuService.studentPost(this.studentAdd.value).subscribe((result) => {
      this.responceData = result;
      console.log('responceData', this.responceData);

      
      this.studentAdd.reset();
          alert(result.message);
          this.errorMessage=null;
        },
        (err)=>{
          this.errorMessage=err.error.errors;
          console.log("errors",err.error.errors)
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
