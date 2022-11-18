import { ClassService } from 'src/app/service/class.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-routine-list',
  templateUrl: './routine-list.component.html',
  styleUrls: ['./routine-list.component.scss']
})
export class RoutineListComponent implements OnInit {
  classRoutinesData:any;
  constructor(
    private subjectService: ClassService
  ) { }

  ngOnInit(): void {
    this.classRoutinesList();
  }


  classRoutinesList() {
    this.subjectService.classRoutinesList().subscribe((result) => {
      this.classRoutinesData = result;
      console.log('teaData', this.classRoutinesData);
     
    });
  } 


  confirmBox(id: any) {
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
     

        this.subjectService.deleteSubjectData(id).subscribe((result) => {
          // window.location.reload();
          this.classRoutinesList();
        
        });
       
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }



}
