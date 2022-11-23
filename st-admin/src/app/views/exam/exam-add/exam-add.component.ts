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

  examRoutineAdd!: FormGroup;
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
    this.examRoutineAdd = this.fb.group({
      name: ['', Validators.required],
     
    });

    // update data
    this.activateRoute.paramMap.subscribe((param) => {
      this.examRoutine_id = param.get('id');
      console.log('param', this.examRoutine_id )
      if (this.examRoutine_id) {
        this.getExamRoutineDataById(this.examRoutine_id);
      } 
    });

  }

  examRoutineSubmit(){


    if (this.getUpdateData) {
      this.examRoutineDataUpdate(this.examRoutineAdd.value, this.examRoutine_id);
     
      

    } else {
   
    this.classService.examRoutinePost(this.examRoutineAdd.value).subscribe((result) => {
      this.responceData = result;


      this.examRoutineAdd.reset();
      this.toastr.success(result.message);
          this.errorMessage=null;
        },
        (err)=>{
          this.errorMessage=err.error.errors;
          this.toastr.error(err.error.errors.name);
          
        });
      }
  }




  
  getExamRoutineDataById(ExmRoutnId: any) {
    
    
    this.classService.getExamRoutineDataById(ExmRoutnId).subscribe((result) => {
      this.getUpdateData = result;
     console.log('this.getUpdateData', this.getUpdateData)
     
    //  this.subjectList();
    //  this.teaList();
    //  this.classRoomList();
      this.setFormData();
    });
  }

  setFormData() {
    this.examRoutineAdd.patchValue({
      // weekday: this.getUpdateData.routine.weekday,
      // subject_id: this.getUpdateData.find( (f: { name: any }) => f.name == this.getUpdateData?.routine?.subject?.name).id,
      // teacher_id: this.getUpdateData.find( (f: { name: any }) => f.name === this.getUpdateData?.routine?.teacher?.user.name),
   
      name: this.getUpdateData.exam.name,
   
      
    
    });
    this.examRoutineAdd.patchValue(this.getUpdateData.exam);
 
    
    
  }



  examRoutineDataUpdate(data: any, slug: any) {
    this.classService.examRoutineDataUpdate(data, slug).subscribe((result) => {

      this.examRoutineAdd.reset();
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
