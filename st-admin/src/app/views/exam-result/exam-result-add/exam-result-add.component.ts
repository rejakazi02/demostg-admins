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
import { StudentService } from 'src/app/service/student.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-exam-result-add',
  templateUrl: './exam-result-add.component.html',
  styleUrls: ['./exam-result-add.component.scss'],
})
export class ExamResultAddComponent implements OnInit {
  name = 'Angular';
  errorMessage: any;
  responceData: any;
  subjectData: any;
  classSectionData: any;
  classDatas: any;
  examData: any;
  classRoomListData: any;
  studentListData: any;
  classvale: any;
  mmarks: any;

  marksdata: any = [];

  examRoutineForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private classService: ClassService,
    private teaService: TeacherService,
    private studentService: StudentService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.examRoutineForm = this.fb.group({
      class_id: ['', Validators.required],
      section_id: ['', Validators.required],
      exam_id: ['', Validators.required],
      subject_id: ['', Validators.required],

      students: this.fb.array([]),
    });

    this.classData();
    // this.subjectListbyClass();
    this.examList();
    this.classRoomList();
  }

  //  form reactive start
  students(): FormArray {
    return this.examRoutineForm.get('students') as FormArray;
  }

  newQuantity(mark: any, roll: any): FormGroup {
    return this.fb.group({
      marks: [mark, Validators.required],
      roll_no: [roll, Validators.required],
    });
  }

  // addQuantity(data:any) {
  //   data.map((item:any)=>{
  //     this.students().push(this.newQuantity(item.roll_no,this.mmarks));
  //   })

  // }

  examRoutineOnSubmit() {
    console.log(this.examRoutineForm.value);

    this.classService.examResultPost(this.examRoutineForm.value).subscribe(
      (result) => {
        this.responceData = result;

        this.examRoutineForm.reset();
        this.toastr.success(result.message);
        this.errorMessage = null;
        // window.location.reload();
      },
      (err) => {
        this.errorMessage = err.error.errors;

        if (err.error.errors.class_section_id) {
          this.toastr.error(err.error.errors.class_section_id);
        }
        if (err.error.errors.weekday) {
          this.toastr.error(err.error.errors.exam_id);
        }

        if (err.error.errors.items) {
          this.toastr.error(err.error.errors.items);
        }
      }
    );
  }

  // classs data
  classData() {
    this.classService.classData().subscribe((result) => {
      this.classDatas = result;
    });
  }

  getSection(value?: any) {
    this.classvale = value;
    this.classService
      .SubSectData(this.examRoutineForm.value, value)
      .subscribe((result) => {
        this.classSectionData = result;
      });

    this.classService
      .subjectListbyClass(this.examRoutineForm.value, value)
      .subscribe((result) => {
        this.subjectData = result;
        // console.log('teaData', this.subjectData);
      });
  }

  // studentList section
  getStudent(valuel?: any) {
    this.studentService
      .studentList(this.classvale, valuel)
      .subscribe((result: any) => {
        this.studentListData = result;
      });
  }

  getMartk($event: any, rollno: any) {
    console.warn('Mark' + $event.target.value + '' + ' roll' + rollno);
    this.mmarks = $event.target.value;

    this.students().push(this.newQuantity(this.mmarks, rollno));

    console.log('first', this.mmarks);
  }

  // subject list
  // subjectListbyClass() {
  //     this.classService.subjectListbyClass().subscribe((result) => {
  //       this.subjectData = result;
  //       // console.log('teaData', this.subjectData);

  //     });
  //   }

  // exam list
  examList() {
    this.classService.examList().subscribe((result) => {
      this.examData = result;
      // console.log('teaData', this.teaData);
    });
  }

  // class Room List Data
  classRoomList() {
    this.classService.classRoomList().subscribe((result) => {
      this.classRoomListData = result;
    });
  }
}
