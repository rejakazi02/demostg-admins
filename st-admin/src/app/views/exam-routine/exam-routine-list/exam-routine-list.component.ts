import { ClassService } from 'src/app/service/class.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-exam-routine-list',
  templateUrl: './exam-routine-list.component.html',
  styleUrls: ['./exam-routine-list.component.scss']
})
export class ExamRoutineListComponent implements OnInit {
  classRoutinesData:any;
  classDatas:any;
id: any;
classSectionData:any;
classRoutinesSearchData:any;
subjectData:any;
examData:any;

  constructor(
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    this.classRoutinesList();
    this.classData();
    this.subjectList();
    this.examList();
    
  }

  // class Routines List
  classRoutinesList() {

    // if(this.classRoutinesSearchData){
    //   this.search
    // }
   
      this.classService.classRoutinesList().subscribe((result) => {
        this.classRoutinesData = result;
        console.log('teaData', this.classRoutinesData);
       
      });
    
   
  } 

   // classs data 
   classData(){
    this.classService.classData().subscribe((result)=>{
      
      this.classDatas = result;

    })
  }


  getSection(value?:any){

    this.classService
    .SubSectDat(value)
    .subscribe((result) => {
      this.classSectionData = result;
      console.log('sec',  this.classSectionData);
      
    });

  }

  search(day:any, classsId:any, sectionId:any){
    
    this.classService.classRoutinesSearch(classsId, sectionId, day).subscribe((result) => {
      this.classRoutinesData = result;
      console.log('classRoutinesSearchData', this.classRoutinesData);
     
    });


  }



// delete section 
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
     

        this.classService.deleteClassRoutineData(id).subscribe((result) => {
          // window.location.reload();
          console.log('dlt',result);
          
          this.classRoutinesList();
        
        });
       
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }

// subject list 
subjectList() {
  this.classService.subjectList().subscribe((result) => {
    this.subjectData = result;
    // console.log('teaData', this.subjectData);
   
  });
}

// exam list 
examList() {
  this.classService.examList().subscribe((result) => {
    this.examData = result;
    // console.log('teaData', this.teaData);
   
  });
}


}
