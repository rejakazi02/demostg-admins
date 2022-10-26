import { Component, OnInit } from '@angular/core';
import { ClassService } from './../../../service/class.service';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  ) { }

  ngOnInit(): void {
    this.sectionAdd = this.fb.group({
      name: ['', Validators.required],
     
    });
    // window.location.reload();
this.sectionData();
  }
  sectionSubmit(){
    console.log("test", this.sectionAdd.value)
    this.sectionService.sectionPost(this.sectionAdd.value).subscribe((result) => {
      this.responceData = result;
      console.log('responceData of section', this.responceData);

      this.sectionAdd.reset();
      alert(result.message);
          this.errorMessage=null;
        },
        (err)=>{
          this.errorMessage=err.error.errors;
          console.log("errors",err.error.errors)
          // alert(err.error.message)
        });
    
  }

  sectionData(){
    this.sectionService.sectionData().subscribe((result)=>{
      
      this.sectionDatas = result;
      console.log('sectin', this.sectionDatas)
    })
  }
}
