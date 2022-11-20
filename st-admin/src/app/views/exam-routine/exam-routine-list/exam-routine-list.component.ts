import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/service/class.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-exam-routine-list',
  templateUrl: './exam-routine-list.component.html',
  styleUrls: ['./exam-routine-list.component.scss']
})
export class ExamRoutineListComponent implements OnInit {
  examListData:any;

  constructor(
    private classService: ClassService,
  ) { }

  ngOnInit(): void {
    this.examRoutineList();
  }



  examRoutineList() {
    this.classService.examRoutineList().subscribe((result) => {
      this.examListData = result;
      console.log('exam',this.examListData);
      
     

    });
  }


  


  confirmBox(id: string) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
        this.classService.deleteExamRoutineData(id).subscribe((result) => {
          this.examRoutineList();
        });



      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }


}
