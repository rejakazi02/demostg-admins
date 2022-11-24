import { ClassService } from 'src/app/service/class.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  subjectData:any;
  classDatas:any;
  constructor(
    private subjectService: ClassService
  ) { }

  ngOnInit(): void {
    this.subjectList();
    this.classData();
  }


  subjectList() {
    this.subjectService.subjectList().subscribe((result) => {
      this.subjectData = result;
      console.log('teaData', this.subjectData);
     
    });
  }


// classs data 
classData(){
  this.subjectService.classData().subscribe((result)=>{
    
    this.classDatas = result;

  })
}
  
  search( classsId:any){
    
    this.subjectService.subjectListData(classsId).subscribe((result) => {
      this.subjectData = result;
      console.log('classRoutinesSearchData', this.subjectData);
     
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
          this.subjectList();
        
        });
       
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }



}
