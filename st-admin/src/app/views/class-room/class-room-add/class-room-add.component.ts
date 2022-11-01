import { ClassService } from 'src/app/service/class.service';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-class-room-add',
  templateUrl: './class-room-add.component.html',
  styleUrls: ['./class-room-add.component.scss']
})
export class ClassRoomAddComponent implements OnInit {
  classRoomAdd!: FormGroup;
  responceData: any;
  errorMessage: any;
  constructor(
    private fb: FormBuilder,
    private classRoomService: ClassService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.classRoomAdd = this.fb.group({
      room_no : ['', Validators.required],
      capacity : ['', Validators.required],
     
    });
  }

  classRoomSubmit() {
  
    this.classRoomService.classRoomPost(this.classRoomAdd.value).subscribe(
      (result) => {
        this.responceData = result;

        this.classRoomAdd.reset();
        this.toastr.success(result.message);
        this.errorMessage = null;
      },
      (err) => {
        this.errorMessage = err.error.errors;

        if (err.error.errors.room_no) {
          this.toastr.error(err?.error.errors.room_no);
        }
        if (err.error.errors.capacity) {
          this.toastr.error(err?.error.errors.capacity);
        }
        
      }
    );
  }


}
