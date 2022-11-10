import { filter } from 'rxjs/operators';
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
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-student-details-update',
  templateUrl: './single-student-details-update.component.html',
  styleUrls: ['./single-student-details-update.component.scss']
})
export class SingleStudentDetailsUpdateComponent implements OnInit {
  studentDataUpdate: any;
  errorMessage: any;
  responceData: any;
  getUpdateData:any;
  stu_id?: any;
  classSectionData:any;
  classDatas:any;
  class_Id:any;


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
    private route: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.studentDataUpdate = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      admission_date: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      gender: ['', Validators.required],
      religion: ['', Validators.required],
      blood_group: ['', Validators.required],
      class_id: ['', Validators.required],
      section_id: ['', Validators.required],
      session: ['', Validators.required],
      roll_no: ['', Validators.required],
      student_id: ['', Validators.required],
      present_address: ['', Validators.required],
      permanent_address: ['', Validators.required],

  
      // class_id: [this.data.claData, Validators.required],
      // section_id: [this.data.secData, Validators.required],
      image: null,
    });

       // update data
       this.activateRoute.paramMap.subscribe((param) => {
        this.stu_id = param.get('id');
        console.log('param', this.stu_id )
        if (this.stu_id) {
          this.getStuDataBySlug(this.stu_id);
        } else {
          this.classData();
        }
      });

      // this.getStuDataBySlug();
      // this.classData();
      
    }


// immage upload
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

  // student Data Update Submit

  studentDataUpdateSubmit(){
    console.log('test', this.studentDataUpdate.value);
  

    const mData = {
      ...this.studentDataUpdate.value,
      ...{
        image: this.pickedImage 
      }
    }

    this.stuDataUpdate(this.studentDataUpdate.value, this.stu_id);
 


  }

  // class Datas ------------------------------------------------------

  classData(){
    this.classService.classData().subscribe((result)=>{
      
      this.classDatas = result;

      this.studentDataUpdate.patchValue({
        class_id: this.classDatas.find( (f: { name: any }) => f.name == this.getUpdateData.student.class).id
      })      
      console.log('this.studentDataUpdate.value.class_id', this.studentDataUpdate.value.class_id);
      
      this.getSection(this.studentDataUpdate.value.class_id)
    })
  }


  getSection(value?:any){

    this.classService
    .SubSectData(this.studentDataUpdate.value, value)
    .subscribe((result) => {
      this.classSectionData = result;
      this.studentDataUpdate.patchValue({
        section_id: this.classSectionData.sections.find( (f: { name: any }) => f.name == this.getUpdateData.student.section)?.id
      })
      console.log('classSectionData', this.classSectionData);
    });

  }

  getStuDataBySlug(slug: any) {
    this.stuService.getStuDataBySlug(slug).subscribe((result) => {
      this.getUpdateData = result;
     console.log('this.getUpdateData', this.getUpdateData)
      this.classData();
      this.setFormData();
    });
  }

  setFormData() {
    this.studentDataUpdate.patchValue({
      name: this.getUpdateData.student.user.name,
      email: this.getUpdateData.student.user.email,
      phone: this.getUpdateData.student.user.phone,
      image: this.getUpdateData.student.user.image,
     
      
      // categories_id: this.subCatagoryData.find((f: { id: any; }) => f.id == this.getUpdateData.first_category_id).slug,
      // categories_id: this.getUpdateData.first_category_id,
      // categories_id: this.getUpdateData.first_category_id,
    });
    this.studentDataUpdate.patchValue(this.getUpdateData.student);

    
    
  }

  stuDataUpdate(data: any, stud_id: any) {
    this.stuService.stuDataUpdate(data, stud_id).subscribe((result) => {

      this.studentDataUpdate.reset();
      this.toastr.success(result.message);
      this.errorMessage=null;
        },
        (err)=>{
          this.errorMessage=err.error.errors;
          console.log("errors",err.error.errors)
          // alert(err.error.message)
        });
  }





}
