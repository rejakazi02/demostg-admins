import { Component, Inject, OnInit } from '@angular/core';
import { ClassService } from './../../../service/class.service';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-section-teacher-add',
  templateUrl: './section-teacher-add.component.html',
  styleUrls: ['./section-teacher-add.component.scss']
})
export class SectionTeacherAddComponent implements OnInit {
  sectionTeacherAdd!: FormGroup;
  responceData: any;
  sectionDatas:any;
errorMessage:any;
  constructor(
    private sectionService: ClassService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.sectionTeacherAdd = this.fb.group({
      name: ['', Validators.required],
      capacity: ['', Validators.required],
      class_id: [this.data.claData, Validators.required],
      section_id: [this.data.secData, Validators.required],
    });
    console.log('this.data.claData',this.data.claData);
    console.log('this.data.secData',this.data.secData);
    
  }

  sectionTeacherSubmit(){
    console.log("test", this.sectionTeacherAdd.value)
    this.sectionService.sectionPost( this.sectionTeacherAdd.value).subscribe((result) => {
      this.responceData = result;
 

      this.sectionTeacherAdd.reset();
      this.toastr.success(result.message);
          this.errorMessage=null;
          window.location.reload();
        },
        (err)=>{
          this.errorMessage=err.error.errors;
          
          if(err.error.errors.name){
            this.toastr.error(err.error.errors.name);
          }
          if(err.error.errors.class_id){
            this.toastr.error(err.error.errors.class_id);
          }
          
        });
    
  }

}
