import { ClassService } from './../../../service/class.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exam-routine-add',
  templateUrl: './exam-routine-add.component.html',
  styleUrls: ['./exam-routine-add.component.scss']
})
export class ExamRoutineAddComponent implements OnInit {

  examRoutineAdd!: FormGroup;
  responceData: any;
  errorMessage:any;

  constructor(
    private classService: ClassService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.examRoutineAdd = this.fb.group({
      name: ['', Validators.required],
     
    });
  }

  examRoutineSubmit(){
    console.log("test", this.examRoutineAdd.value)
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
