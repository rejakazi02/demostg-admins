import { ClassService } from './../../../service/class.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent implements OnInit {
  classListData: any;
  sectionDatas:any;

  constructor(
    private classService: ClassService,
    ) {}

  ngOnInit(): void {
    this.classtList();
    this.sectionData();
  }

  classtList() {
    this.classService.classtList().subscribe((result) => {
      this.classListData = result;
      console.log('classssssss',this.classListData);
      
    });
  }




  sectionData(){
    this.classService.sectionData().subscribe((result)=>{
      
      this.sectionDatas = result;
      console.log('sectin', this.sectionDatas)
    })
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
        this.classService.deleteClassData(id).subscribe((result) => {
          this.classtList();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
}
