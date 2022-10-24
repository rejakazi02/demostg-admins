import { DepartmentService } from './../../../service/department.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
deptListData:any;
  constructor(private deptService: DepartmentService) { }

  ngOnInit(): void {
    this.departList();
    }


  departList() {
    this.deptService.departList().subscribe((result) => {
      this.deptListData = result;
      
     

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
        this.deptService.deleteDepData(id).subscribe((result) => {
          this.departList();
        });



      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
}
