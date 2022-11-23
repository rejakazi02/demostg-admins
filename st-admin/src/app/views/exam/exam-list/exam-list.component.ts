import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/service/class.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {

  examListData:any;

  constructor(
    private classService: ClassService,
  ) { }

  ngOnInit(): void {
    this.examList();
  }



  examList() {
    this.classService.examList().subscribe((result) => {
      this.examListData = result;
    
      
     

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
        this.classService.deleteExamData(id).subscribe((result) => {
          this.examList();
        });



      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }

}
