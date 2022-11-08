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
  file: any;
  pickedImage: any;
  url:any;
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
      image: null,
    });

    this.classData();
  }

// file upload section 

// onFileSelected(event:Event){
// console.log('event',event)
// const file = event?.target?.files[0];
// console.log('file',file)
// this.studentAdd.patchValue({
//   image:file
 
// });
// }

/*
   * IMAGE METHODS
   * pickImage()
   */


// onFileSelected(event:any) {
//   if (event.target.files && event.target.files[0].name) {

//     this.file = event.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(event.target.files[0].name);
//     reader.onload = () => {
//       this.pickedImage = reader.result;
//           this.dtr.detectChanges();

//     };
//   }


onFileSelected(event:any) {
  this.file = event.target.files[0].name;

  if (this.file) {
    this.studentAdd.patchValue({
      image: this.file,
    });
    this.studentAdd.get('image').updateValueAndValidity();

    let reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
      this.pickedImage = reader.result;
      this.dtr.detectChanges();        
    }
  }

}

getImagePreview() {
   return this.pickedImage;
}


// student addd 
  studentSubmit() {
    console.log('test', this.studentAdd.value);
  

    const mData = {
      ...this.studentAdd.value,
      ...{
        image: this.pickedImage 
      }
    }


    this.stuService.studentPost(mData).subscribe(
      (result) => {
        this.responceData = result;
        console.log('responceData', this.responceData);

        this.studentAdd.reset();
        this.toastr.success(result.message);
        this.errorMessage = null;
        window.location.reload();
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
