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
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.scss']
})
export class ClassAddComponent implements OnInit {

  classAdd!: FormGroup;
  responceData: any;
classDatas:any;
errorMessage:any;

  constructor(
    private classService: ClassService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.classAdd = this.fb.group({
      name: ['', Validators.required],
     
    });
    // window.location.reload();

    this.classData();
  }


  classSubmit(){
    console.log("test", this.classAdd.value)
    this.classService.classPost(this.classAdd.value).subscribe((result) => {
      this.responceData = result;
      console.log('responceData', this.responceData);

      this.classAdd.reset();
      // alert(result.message);
      this.toastr.success(result.message);
          this.errorMessage=null;
        },
        (err)=>{
          this.errorMessage=err.error.errors;
          this.toastr.error(err.error.errors);
          // alert(err.error.message)
        });
    
  }

  classData(){
    this.classService.classData().subscribe((result)=>{
      
      this.classDatas = result;
      console.log('class', this.classDatas)
    })
  }
 
} 
