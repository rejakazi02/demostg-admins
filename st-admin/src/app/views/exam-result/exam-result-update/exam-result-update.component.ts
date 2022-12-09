import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from 'src/app/service/class.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exam-result-update',
  templateUrl: './exam-result-update.component.html',
  styleUrls: ['./exam-result-update.component.scss'],
})
export class ExamResultUpdateComponent implements OnInit {
  errorMessage: any;
  responceData: any;
  subjectData: any;
  classSectionData: any;
  classDatas: any;
  teaData: any;
  classRoomListData: any;
  examRoutineForm: any;
  routine_id: any;
  getUpdateData: any;
  examData: any;

  constructor(
    private fb: FormBuilder,
    private classService: ClassService,
    private toastr: ToastrService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.examRoutineForm = this.fb.group({
      marks: ['', Validators.required],
    });

    // update data
    this.activateRoute.paramMap.subscribe((param) => {
      this.routine_id = param.get('id');
      console.log('param', this.routine_id);
      if (this.routine_id) {
        this.getExamResultDataById(this.routine_id);
      }
    });
  }


  // exam Result On Submit
  examRoutineOnSubmit() {
    console.log(this.examRoutineForm.value);

    this.classService
      .examResultDataUpdate(this.examRoutineForm.value, this.routine_id)
      .subscribe(
        (result) => {
          this.responceData = result;

          this.examRoutineForm.reset();
          this.toastr.success(result.message);
          this.errorMessage = null;
          // window.location.reload();
        },
        (err) => {
          this.errorMessage = err.error.errors;

          if(err.error.errors.marks){
            this.toastr.error(err.error.errors.marks);
          }
        }
      );
  }

  // get Exam Result Data By Id

  getExamResultDataById(RoutnId: any) {
    this.classService.getExamResultDataById(RoutnId).subscribe((result) => {
      this.getUpdateData = result;
      //  console.log('this.getUpdateData', this.getUpdateData)
      this.setFormData();
    });
  }

  setFormData() {
    this.examRoutineForm.patchValue({
      marks: this.getUpdateData.exam_mark.mark,
    });
  }
}
