import { ClassService } from 'src/app/service/class.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exam-result-list',
  templateUrl: './exam-result-list.component.html',
  styleUrls: ['./exam-result-list.component.scss']
})
export class ExamResultListComponent implements OnInit {

  examRoutinesData:any;
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
    // this.examRoutinesList();
    this.classData();
    // this.subjectList();
    this.examList();
  

    
  }

  // class Routines List
  // examRoutinesList() {

  //   // if(this.classRoutinesSearchData){
  //   //   this.search
  //   // }
   
  //     this.classService.examRoutinesList().subscribe((result) => {
  //       this.examRoutinesData = result;
  //       console.log('examRoutinesList', this.examRoutinesData);
       
  //     });
    
   
  // } 

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

    this.classService.subjectListData( value).subscribe((result) => {
      this.subjectData = result;
      // console.log('teaData', this.subjectData);
     
    });


  }

  search(exam:any, classsId:any, sectionId:any, subjects:any){
    
    this.classService.examResultSearch(classsId, sectionId, exam, subjects).subscribe((result) => {
      this.examRoutinesData = result;
      console.log('classRoutinesSearchData', this.examRoutinesData);
     
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
     

        this.classService.deleteExamResultData(id).subscribe((result) => {
          // window.location.reload();
          console.log('dlt',result);
          
          // this.examRoutinesList();
        
        });
       
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }

// subject list 
// subjectList() {
//   this.classService.subjectList().subscribe((result) => {
//     this.subjectData = result;
//     // console.log('teaData', this.subjectData);
   
//   });
// }

// exam list 
examList() {
  this.classService.examList().subscribe((result) => {
    this.examData = result;
    // console.log('teaData', this.teaData);
   
  });
}


}
