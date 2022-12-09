import { map } from 'rxjs/operators';
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

  // //  form reactive start
  // students(): FormArray {
  //   return this.examRoutineForm.get('students') as FormArray;
  // }

  // newQuantity(roll: any, ll: any): FormGroup {
  //   return this.fb.group({
  //     marks: [ll, Validators.required],
  //     roll_no: [roll, Validators.required],
  //   });
  // }

  // addQuantity(data: any) {
  //   data.map((item: any) => {
  //     this.students().push(this.newQuantity(item.roll_no, this.mmarks));
  //   });
  // }

  examRoutineOnSubmit() {
    const mydata = {
      ...this.examRoutineForm.value,
      ...{ students: this.marksdata },
    };
    console.log(mydata);
    this.classService.examResultPost(mydata).subscribe(
      (result) => {
        this.responceData = result;

        this.examRoutineForm.reset();
        this.toastr.success(result.message);
        this.errorMessage = null;
        this.studentListData = [];
        // window.location.reload();
      },
      (err) => {
        this.errorMessage = err.error.errors;

        if (err.error.errors.class_section_id) {
          this.toastr.error(err.error.errors.class_section_id);
        }
        if (err.error.errors.subject_id) {
          this.toastr.error(err.error.errors.subject_id);
        }

        if (err.error.errors.exam_id) {
          this.toastr.error(err.error.errors.exam_id);
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
  getStudent(value?: any) {
    this.studentService
      .studentList(this.classvale, value)
      .subscribe((result: any) => {
        this.studentListData = result;
        result.students.data.map((item: any) => {
          this.marksdata.push({ roll_no: item.roll_no, marks: 0 });
        });
        // this.addQuantity(result.students.data)
      });
  }

  getMartk($event: any, rollno: any) {
    this.marksdata.map((item: any) => {
      if (item.roll_no == rollno) {
        item.marks = $event.target.value;
      }
    });
    console.warn(this.marksdata);
    // this.mmarks = $event.target.value;
    // console.log("first", this.mmarks )
  }

 

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
