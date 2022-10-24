import { Component, OnInit } from '@angular/core';
import { TeacherService } from './../../../service/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  teaData:any;
  constructor(  private teaService: TeacherService) { }

  ngOnInit(): void {
    this.teaList();
  }


  teaList() {
    this.teaService.teaList().subscribe((result) => {
      this.teaData = result;
      console.log('teaData', this.teaData);
     
    });
  }

 
  // deleteTeaData(id: string) {
  //   this.teaService.deleteTeaData(id).subscribe((result) => {
  //     // window.location.reload();
  //     alert(' Data Delete Successfull');
    
  //   });
  // }


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
        // this.insService.deleteData(slug).subscribe((result) => {
        //   // window.location.reload();
        //   // alert(' Data Delete Successfull');
        //   this. instList();
        // });

        this.teaService.deleteTeaData(id).subscribe((result) => {
          // window.location.reload();
         this.teaList();
        
        });
       
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }




}
