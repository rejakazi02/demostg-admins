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


@Component({
  selector: 'app-routine-add',
  templateUrl: './routine-add.component.html',
  styleUrls: ['./routine-add.component.scss']
})
export class RoutineAddComponent implements OnInit {
  name = 'Angular';  
  errorMessage: any;
  responceData: any;
  getUpdateData:any;
  stu_id?: any;
  classSectionData:any;
  classDatas:any;
  class_Id:any;
  classRoutineForm!: FormGroup;  
  constructor(
    private fb:FormBuilder,
    private classService: ClassService,
    private toastr: ToastrService,
  ) { 
     
  }

  ngOnInit(): void {
    this.classRoutineForm = this.fb.group({  
    
      class_id: ['', Validators.required],
      section_id: ['', Validators.required], 
      items: this.fb.array([]) ,  
    }); 

    this.classData();
  }

  items() : FormArray {  
    return this.classRoutineForm.get("items") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      qty: '',  
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

  classData(){
    this.classService.classData().subscribe((result)=>{
      
      this.classDatas = result;

      // this.studentDataUpdate.patchValue({
      //   class_id: this.classDatas.find( (f: { name: any }) => f.name == this.getUpdateData.student.class).id
      // })      
      // console.log('this.studentDataUpdate.value.class_id', this.studentDataUpdate.value.class_id);
      
      // this.getSection(this.studentDataUpdate.value.class_id)
    })
  }


  getSection(value?:any){

    this.classService
    .SubSectData(this.classRoutineForm.value, value)
    .subscribe((result) => {
      this.classSectionData = result;
      // this.studentDataUpdate.patchValue({
      //   section_id: this.classSectionData.sections.find( (f: { name: any }) => f.name == this.getUpdateData.student.section)?.id
      // })
      // console.log('classSectionData', this.classSectionData);
    });

  }

}
