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
  selector: 'app-section-add',
  templateUrl: './section-add.component.html',
  styleUrls: ['./section-add.component.scss']
})
export class SectionAddComponent implements OnInit {
  sectionAdd!: FormGroup;
  responceData: any;
  sectionDatas:any;
errorMessage:any;

  constructor(
    private sectionService: ClassService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) private classId: number 
  ) { }

  ngOnInit(): void {
    this.sectionAdd = this.fb.group({
      name: ['', Validators.required],
      class_id: [this.classId, Validators.required]
    });
    // window.location.reload();
this.sectionData();
  }
  sectionSubmit(){
    console.log("test", this.sectionAdd.value)
    this.sectionService.sectionPost( this.sectionAdd.value).subscribe((result) => {
      this.responceData = result;
 

      this.sectionAdd.reset();
      this.toastr.success(result.message);
          this.errorMessage=null;
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

  sectionData(){
    this.sectionService.sectionData().subscribe((result)=>{
      
      this.sectionDatas = result;
      
    })
  }
}
