import { ClassService } from './../../../service/class.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { SectionAddComponent } from '../../section/section-add/section-add.component';


@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss'],
})
export class ClassListComponent implements OnInit {
  classListData: any;
  sectionDatas:any;
  section= true;

  constructor(
    private classService: ClassService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    this.classtList();
  
  }

  classtList() {
    this.classService.classtList().subscribe((result) => {
      this.classListData = result;
      console.log('classssssss',this.classListData);
      // this.classtList()
    });
    
  }


// open dilog dection start 

  openDialog(classId: number) {
    const dialogRef = this.dialog.open(SectionAddComponent, {data: classId});

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  this.section= false;

  }






  // sectionsList(classId: any){
  //   this.classService.sectionList(classId).subscribe((result)=>{
      
  //     this.sectionDatas = result;
  //     console.log('secti  class', this.sectionDatas)
  //   })
  // }



// delete section 
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
