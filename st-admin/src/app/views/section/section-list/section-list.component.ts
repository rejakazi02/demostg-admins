import { ClassService } from './../../../service/class.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {
  classListData: any;
  sectionDatas:any;
item: any;
sectionListData:any;
itemss:any;
 

  constructor(
    private classService: ClassService,
    
    ) {}

  ngOnInit(): void {
    this.classtList();
  
  }

  classtList() {
    this.classService.classtList().subscribe((result) => {
      this.classListData = result;
       this.itemss=this.classListData.classes;
      // console.log('classssssss',this.classListData);
      
    });
  }
  sectionList(classId:any) {
    this.classService.sectionList(classId).subscribe((result) => {
      this.sectionListData = result;
      console.log('classssssss',this.classListData);
      
    });
  }

  
  confirmBox(data:any, cId:any) {
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
        this.classService.deleteSectionData(data, cId).subscribe((result) => {
          console.log("section data", result);
          
          this.classtList();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }



}
