import { HttpHeaders } from '@angular/common/http';
import { StudentService } from './../../../service/student.service';
import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
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
  styleUrls: ['./student-add.component.scss'],
})
export class StudentAddComponent implements OnInit {
  studentAdd: any;
  errorMessage: any;
  responceData: any;
  subSectionData: any;
  classDatas: any;
  selectedFile!: File;
  studentListData:any;

  // File
  file!: File;
  pickedImage: any;
  url:any;
  selectedImage:any;

  selectedUploadFile: any;


  constructor(
    private fb: FormBuilder,
    private stuService: StudentService,
    private classService: ClassService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentService:StudentService,
    private dtr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.studentAdd = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      admission_date: ['', Validators.required],

      class_id: [this.data.claData, Validators.required],
      section_id: [this.data.secData, Validators.required],
      image: null
    });

    this.classData();
  }

// file upload section 

/*
   * IMAGE METHODS
   * pickImage()
   */


onFileSelected(event:any) {

    this.selectedUploadFile = event.target.files[0]
    console.log(this.selectedImage);

  }




// student addd 
  studentSubmit() {
   const finalData = new FormData();
    console.log('test', this.studentAdd.value);


finalData.append('name',this.studentAdd.get('name').value);
finalData.append('phone',this.studentAdd.get('phone').value);
finalData.append('password',this.studentAdd.get('password').value);
finalData.append('admission_date',this.studentAdd.get('admission_date').value);
finalData.append('class_id',this.studentAdd.get('class_id').value);
finalData.append('section_id',this.studentAdd.get('section_id').value);
if(this.selectedUploadFile){
  finalData.append('image',this.selectedUploadFile);

}


    this.stuService.studentPost(finalData).subscribe(
      (result) => {
        this.responceData = result;
        console.log('responceData', this.responceData);

        this.studentAdd.reset();
        this.toastr.success(result.message);
        this.errorMessage = null;
        // window.location.reload();
      },
      (err) => {
        this.errorMessage = err.error.errors;
        // this.toastr.error(err.error.message);
         if(err.error.errors.name){
          this.toastr.error(err.error.errors.name);
         }
         if(err.error.errors.phone){
          this.toastr.error(err.error.errors.phone);
         }
        // alert(err.error.message)
      }
    );

   
  }



  studentList() {
    this.studentService.studentList(this.data.claData,this.data.secData).subscribe((result) => {
    this.studentListData = result;
  
    console.log('studentListData',this.studentListData);
    
  });
  
  }








  classData() {
    this.classService.classData().subscribe((result) => {
      this.classDatas = result;
      console.log('class', this.classDatas);
    });
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
