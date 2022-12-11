import { ClassService } from 'src/app/service/class.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admission-list',
  templateUrl: './admission-list.component.html',
  styleUrls: ['./admission-list.component.scss']
})
export class AdmissionListComponent implements OnInit {

  examRoutinesData:any;
  classDatas:any;
id: any;
classSectionData:any;
classRoutinesSearchData:any;
subjectData:any;
examData:any;

classsIddd:any;
sectionIddd:any;
subjectsss:any;
examName:any;

  constructor(
    private classService: ClassService
  ) { }

  ngOnInit(): void {
    // this.examRoutinesList();
    this.classData();
    // this.subjectList();
    this.examList();
  

    
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

    this.classService.subjectListData( value).subscribe((result) => {
      this.subjectData = result;
      // console.log('teaData', this.subjectData);
     
    });


  }

  search(exam:any, classsId:any, sectionId:any, subjects:any){

   
    this.classsIddd = classsId;
    this.sectionIddd = sectionId;
     this.examName = exam;
    this.subjectsss = subjects;
  
    
   
    
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
        

          this.classService.examResultSearch(this.classsIddd, this.sectionIddd, this.examName, this.subjectsss).subscribe((result) => {
            this.examRoutinesData = result;
            console.log('classRoutinesSearchData', this.examRoutinesData);
           
          });
        
        });
       
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
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
