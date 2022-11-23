import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from 'src/app/service/class.service';
import { StudentService } from 'src/app/service/student.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/service/teacher.service';


@Component({
  selector: 'app-exam-routine-update',
  templateUrl: './exam-routine-update.component.html',
  styleUrls: ['./exam-routine-update.component.scss']
})
export class ExamRoutineUpdateComponent implements OnInit {

 
  errorMessage: any;
  responceData: any;
  subjectData:any;
  classSectionData:any;
  classDatas:any;
  teaData:any;
  classRoomListData:any;
  examRoutineForm:any;
  routine_id:any;
  getUpdateData:any;
  examData:any;
  
  constructor(
    private fb:FormBuilder,
    private classService: ClassService,
    private teaService: TeacherService,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.examRoutineForm = this.fb.group({  
    
      end_time: ['', Validators.required],
      start_time: ['', Validators.required], 
      exam_id: ['', Validators.required], 
      room_id: ['', Validators.required], 
      exam_date: ['', Validators.required], 
      subject_id: ['', Validators.required], 
      class_id: ['', Validators.required], 
      section_id: ['', Validators.required], 
       
    }); 


     // update data
     this.activateRoute.paramMap.subscribe((param) => {
      this.routine_id = param.get('id');
      console.log('param', this.routine_id )
      if (this.routine_id) {
        this.getRoutineDataById(this.routine_id);
      } 
    });

    // this.classData();
    // this.subjectList();
    this.classData();
    this.classRoomList();
    this.examList();
  
  }

  examRoutineOnSubmit() {  
    console.log(this.examRoutineForm.value);
  
    this.classService.examRoutineDataUpdate( this.examRoutineForm.value, this.routine_id).subscribe((result) => {
      this.responceData = result;
 

      this.examRoutineForm.reset();
      this.toastr.success(result.message);
          this.errorMessage=null;
          // window.location.reload();
        },
        (err)=>{
          this.errorMessage=err.error.errors;
          
          if(err.error.errors.room_id){
            this.toastr.error(err.error.errors.room_id);
          }
          if(err.error.errors.weekday){
            this.toastr.error(err.error.errors.weekday);
          }

          // if(err.error.errors.items){
          //   this.toastr.error(err.error.errors.items);
          // }
         
          
        });  
  }  


  // exam list 
examList() {
  this.classService.examList().subscribe((result) => {
    this.examData = result;
    // console.log('teaData', this.teaData);
   
  });
}


  // classs data 
  classData(){
    this.classService.classData().subscribe((result)=>{
      
      this.classDatas = result;
      this.getSection(this.examRoutineForm.value.class_id)
      this.examRoutineForm.patchValue({
        class_id: this.classDatas.find( (f: { name: any }) => f.name == this.getUpdateData?.exam_routine?.class?.id)
      
      })      
      // console.log('this.studentDataUpdate.value.class_id', this.studentDataUpdate.value.class_id);
      
     

    })
  }


  getSection(value?:any){

    this.classService
    .SubSectData(this.examRoutineForm.value, value)
    .subscribe((result) => {
      this.classSectionData = result;

      // this.examRoutineForm.patchValue({
      //   section_id: this.classSectionData.sections.find( (f: { name: any }) => f.name == this.getUpdateData.exam_routine.section)?.id
      // })
    });

    this.classService.subjectListbyClass(this.examRoutineForm.value, value).subscribe((result) => {
      this.subjectData = result;
      // console.log('teaData', this.subjectData);
     
    });

  }



  getRoutineDataById(RoutnId: any) {
    this.classService.getExamRoutineDataById(RoutnId).subscribe((result) => {
      this.getUpdateData = result;
     console.log('this.getUpdateData', this.getUpdateData)
     
    //  this.subjectList();
    //  this.teaList();
    //  this.classRoomList();
      this.setFormData();
    });
  }

  setFormData() {
    this.examRoutineForm.patchValue({
      // weekday: this.getUpdateData.routine.weekday,
      // subject_id: this.getUpdateData.find( (f: { name: any }) => f.name == this.getUpdateData?.routine?.subject?.name).id,
      // teacher_id: this.getUpdateData.find( (f: { name: any }) => f.name === this.getUpdateData?.routine?.teacher?.user.name),
   
      // weekday: this.getUpdateData.routine.day.id,
      room_id: this.getUpdateData.exam_routine.room.id,
      exam_id:this.getUpdateData?.exam_routine?.exam?.id,
      subject_id: this.getUpdateData?.exam_routine?.subject?.id,
      class_id: this.getUpdateData?.exam_routine?.class?.id,
      section_id: this.getUpdateData?.exam_routine?.section?.id,
      
    
    });
    this.examRoutineForm.patchValue(this.getUpdateData.exam_routine);
 
    
    
  }














// subject list 
// subjectList() {
//   this.classService.subjectList().subscribe((result) => {
//     this.subjectData = result;
    
//   });
// }



// class Room List Data
classRoomList() {
  this.classService.classRoomList().subscribe((result) => {
    this.classRoomListData = result;
    console.log('room', this.classRoomListData);
 
  });
}




}
