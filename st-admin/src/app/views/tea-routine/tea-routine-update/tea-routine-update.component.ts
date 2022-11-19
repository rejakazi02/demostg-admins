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
  selector: 'app-tea-routine-update',
  templateUrl: './tea-routine-update.component.html',
  styleUrls: ['./tea-routine-update.component.scss']
})
export class TeaRoutineUpdateComponent implements OnInit {

  errorMessage: any;
  responceData: any;
  subjectData:any;
  classSectionData:any;
  classDatas:any;
  teaData:any;
  classRoomListData:any;
  classRoutineForm:any;
  routine_id:any;
  getUpdateData:any;

  constructor(
    private fb:FormBuilder,
    private classService: ClassService,
    private teaService: TeacherService,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.classRoutineForm = this.fb.group({  
    
      end_time: ['', Validators.required],
      start_time: ['', Validators.required], 
      weekday: ['', Validators.required], 
      room_id: ['', Validators.required], 
      teacher_id: ['', Validators.required], 
      subject_id: ['', Validators.required], 
       
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
    this.subjectList();
    this.teaList();
    this.classRoomList();
  
  }

  routineOnSubmit() {  
    console.log(this.classRoutineForm.value);
  
    this.classService.routineDataUpdate( this.classRoutineForm.value, this.routine_id).subscribe((result) => {
      this.responceData = result;
 

      this.classRoutineForm.reset();
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



  getRoutineDataById(RoutnId: any) {
    this.classService.getRoutineDataById(RoutnId).subscribe((result) => {
      this.getUpdateData = result;
     console.log('this.getUpdateData', this.getUpdateData)
     
    //  this.subjectList();
    //  this.teaList();
    //  this.classRoomList();
      this.setFormData();
    });
  }

  setFormData() {
    this.classRoutineForm.patchValue({
      // weekday: this.getUpdateData.routine.weekday,
      // subject_id: this.getUpdateData.find( (f: { name: any }) => f.name == this.getUpdateData?.routine?.subject?.name).id,
      // teacher_id: this.getUpdateData.find( (f: { name: any }) => f.name === this.getUpdateData?.routine?.teacher?.user.name),
   
      weekday: this.getUpdateData.routine.day.id,
      room_id: this.getUpdateData.routine.room.id,
      teacher_id:this.getUpdateData?.routine?.teacher?.id,
      subject_id: this.getUpdateData?.routine?.subject?.id,
      
    
    });
    this.classRoutineForm.patchValue(this.getUpdateData.routine);
 
    
    
  }














// subject list 
subjectList() {
  this.classService.subjectList().subscribe((result) => {
    this.subjectData = result;
    
  });
}

// teacher list 
teaList() {
  this.teaService.teaList().subscribe((result) => {
    this.teaData = result;
    // console.log('teaData', this.teaData);
   
  });
}

// class Room List Data
classRoomList() {
  this.classService.classRoomList().subscribe((result) => {
    this.classRoomListData = result;
    console.log('room', this.classRoomListData);
 
  });
}





}
