import { DepartmentService } from './../../../service/department.service';
import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit {
  departmentAdd!: FormGroup;
  responceData: any;
  errorMessage:any;
  constructor(
    private depService: DepartmentService,
    private fb: FormBuilder,
    
    ) { }
  toppings = new FormControl('');
  ngOnInit(): void {

    this.departmentAdd = this.fb.group({
      name: ['', Validators.required],
     
    });
    // window.location.reload();
  }

 

  depSubmit(){
    console.log("test", this.departmentAdd.value)
    this.depService.deptPost(this.departmentAdd.value).subscribe((result) => {
      this.responceData = result;
      console.log('responceData', this.responceData);

      this.departmentAdd.reset();
      alert(result.message);
          this.errorMessage=null;
        },
        (err)=>{
          this.errorMessage=err.error.errors;
          console.log("errors",err.error.errors)
          // alert(err.error.message)
        });
    
  }
 
}
