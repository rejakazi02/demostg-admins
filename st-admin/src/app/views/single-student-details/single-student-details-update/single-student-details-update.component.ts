import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from 'src/app/service/class.service';
import { StudentService } from 'src/app/service/student.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-single-student-details-update',
  templateUrl: './single-student-details-update.component.html',
  styleUrls: ['./single-student-details-update.component.scss']
})
export class SingleStudentDetailsUpdateComponent implements OnInit {
  studentDataUpdate: any;
  errorMessage: any;
  responceData: any;

  // File
  file: any;
  pickedImage: any;
  url:any;
  constructor(
    private fb: FormBuilder,
    private stuService: StudentService,
    private classService: ClassService,
    private toastr: ToastrService,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    private dtr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.studentDataUpdate = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      admission_date: ['', Validators.required],

      // class_id: [this.data.claData, Validators.required],
      // section_id: [this.data.secData, Validators.required],
      image: null,
    });
  }



  onFileSelected(event:any) {
    this.file = event.target.files[0].name;
  
    if (this.file) {
      this.studentDataUpdate.patchValue({
        image: this.file,
      });
      this.studentDataUpdate.get('image').updateValueAndValidity();
  
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

  
  studentDataUpdateSubmit(){
    console.log('test', this.studentDataUpdate.value);
  

    const mData = {
      ...this.studentDataUpdate.value,
      ...{
        image: this.pickedImage 
      }
    }


    this.stuService.studentPost(mData).subscribe(
      (result) => {
        this.responceData = result;
        console.log('responceData', this.responceData);

        this.studentDataUpdate.reset();
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


}
