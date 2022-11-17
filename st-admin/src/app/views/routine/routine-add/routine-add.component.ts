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
  selector: 'app-routine-add',
  templateUrl: './routine-add.component.html',
  styleUrls: ['./routine-add.component.scss']
})
export class RoutineAddComponent implements OnInit {
  name = 'Angular';  
  errorMessage: any;
  responceData: any;
  subjectData:any;
  classSectionData:any;
  classDatas:any;
  teaData:any;
  classRoomListData:any;

  classRoutineForm!: FormGroup;  
  constructor(
    private fb:FormBuilder,
    private classService: ClassService,
    private teaService: TeacherService,
    private toastr: ToastrService,
  ) { 
     
  }

  ngOnInit(): void {
    this.classRoutineForm = this.fb.group({  
    
      class_id: ['', Validators.required],
      section_id: ['', Validators.required], 
      weekday: ['', Validators.required], 
      items: this.fb.array([]) ,  
    }); 

    this.classData();
    this.subjectList();
    this.teaList();
    this.classRoomList();
  }



//  form reactive start 
  items() : FormArray {  
    return this.classRoutineForm.get("items") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
     
      subject_id: ['', Validators.required],  
      teacher_id: ['', Validators.required],  
      room_id: ['', Validators.required],  
      start_time: ['', Validators.required],  
      end_time: ['', Validators.required],  
    })  
  }  
     
  addQuantity() {  
    this.items().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.items().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.classRoutineForm.value);  
  }  


  // classs data 
  classData(){
    this.classService.classData().subscribe((result)=>{
      
      this.classDatas = result;

    })
  }


  getSection(value?:any){

    this.classService
    .SubSectData(this.classRoutineForm.value, value)
    .subscribe((result) => {
      this.classSectionData = result;
    });

  }

// subject list 
  subjectList() {
    this.classService.subjectList().subscribe((result) => {
      this.subjectData = result;
      console.log('teaData', this.subjectData);
     
    });
  }

// teacher list 
  teaList() {
    this.teaService.teaList().subscribe((result) => {
      this.teaData = result;
      console.log('teaData', this.teaData);
     
    });
  }

  // class Room List Data
  classRoomList() {
    this.classService.classRoomList().subscribe((result) => {
      this.classRoomListData = result;
      
     

    });
  }

}
