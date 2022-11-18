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
  selector: 'app-routine-update',
  templateUrl: './routine-update.component.html',
  styleUrls: ['./routine-update.component.scss']
})
export class RoutineUpdateComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private classService: ClassService,
    private teaService: TeacherService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

}
