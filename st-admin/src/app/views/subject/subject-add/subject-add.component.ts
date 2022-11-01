import { ClassService } from 'src/app/service/class.service';
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
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.scss']
})
export class SubjectAddComponent implements OnInit {
  subjectAdd!: FormGroup;
  responceData: any;
  undata: any;
  // unionName:any;
  errorMessage: any;
  classDatas:any;
  constructor(
    private fb: FormBuilder,
    private subjectService: ClassService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.subjectAdd = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      type: ['', Validators.required],
      class_id: ['', Validators.required],

      is_optional: [false],
      total_marks: ['', Validators.required],
      pass_marks: ['', Validators.required],

      
    });
console.log(Number(true))
    this.classData();
  }

  subjectSubmit() {
    console.log('test', this.subjectAdd.value);
    this.subjectService.subjectPost(this.subjectAdd.value).subscribe(
      (result) => {
        this.responceData = result;

        this.subjectAdd.reset();
        this.toastr.success(result.message);
        this.errorMessage = null;
      },
      (err) => {
        this.errorMessage = err.error.errors;

        if (err.error.errors.name) {
          this.toastr.error(err.error.errors.name);
        }
        if (err.error.errors.class_id) {
          this.toastr.error(err.error.errors.class_id);
        }
        if (err.error.errors.type) {
          this.toastr.error(err.error.errors.type);
        }
        if (err.error.errors.code) {
          this.toastr.error(err.error.errors.code);
        }
        // if (err.error.errors.is_optional) {
        //   this.toastr.error(err.error.errors.is_optional);
        // }
        if (err.error.errors.total_marks) {
          this.toastr.error(err.error.errors.total_marks);
        }
        if (err.error.errors.pass_marks) {
          this.toastr.error(err.error.errors.pass_marks);
        }
        
      }
    );
  }



  classData(){
    this.subjectService.classData().subscribe((result)=>{
      
      this.classDatas = result;
      // console.log('class', this.classDatas)
    })
  }

}
