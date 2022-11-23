import { ClassService } from './../../../service/class.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exam-add',
  templateUrl: './exam-add.component.html',
  styleUrls: ['./exam-add.component.scss']
})
export class ExamAddComponent implements OnInit {

  examAdd!: FormGroup;
  responceData: any;
  errorMessage:any;
  examRoutine_id:any;
  getUpdateData:any;


  constructor(
    private classService: ClassService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.examAdd = this.fb.group({
      name: ['', Validators.required],
     
    });

    // update data
    this.activateRoute.paramMap.subscribe((param) => {
      this.examRoutine_id = param.get('id');
      console.log('param', this.examRoutine_id )
      if (this.examRoutine_id) {
        this.getExamDataById(this.examRoutine_id);
      } 
    });

  }

  examSubmit(){


    if (this.getUpdateData) {
      this.examDataUpdate(this.examAdd.value, this.examRoutine_id);
     
      

    } else {
   
    this.classService.examPost(this.examAdd.value).subscribe((result) => {
      this.responceData = result;


      this.examAdd.reset();
      this.toastr.success(result.message);
          this.errorMessage=null;
        },
        (err)=>{
          this.errorMessage=err.error.errors;
          this.toastr.error(err.error.errors.name);
          
        });
      }
  }




  
  getExamDataById(ExmRoutnId: any) {
    
    
    this.classService.getExamDataById(ExmRoutnId).subscribe((result) => {
      this.getUpdateData = result;
     console.log('this.getUpdateData', this.getUpdateData)
     
    //  this.subjectList();
    //  this.teaList();
    //  this.classRoomList();
      this.setFormData();
    });
  }

  setFormData() {
    this.examAdd.patchValue({
      // weekday: this.getUpdateData.routine.weekday,
      // subject_id: this.getUpdateData.find( (f: { name: any }) => f.name == this.getUpdateData?.routine?.subject?.name).id,
      // teacher_id: this.getUpdateData.find( (f: { name: any }) => f.name === this.getUpdateData?.routine?.teacher?.user.name),
   
      name: this.getUpdateData.exam.name,
   
      
    
    });
    this.examAdd.patchValue(this.getUpdateData.exam);
 
    
    
  }



  examDataUpdate(data: any, slug: any) {
    this.classService.examDataUpdate(data, slug).subscribe((result) => {

      this.examAdd.reset();
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
