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
admiData:any;

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
    this.admissionDataList();
  

    
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

  search(classsId:any, nameId:any){

   
    // this.classsIddd = classsId;
    // this.sectionIddd = sectionId;
    //  this.examName = exam;
    // this.subjectsss = subjects;
  
    
   
    
  this.classService.admissionDataSearch(classsId, nameId).subscribe((result) => {
      this.admiData = result;
      console.log('admiData', this.admiData);
     
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
     

        this.classService.deleteAdmissiontData(id).subscribe((result) => {
        
            this.admissionDataList();
         
        
        });
       
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }


// admission Data List  
admissionDataList() {
  this.classService.admissionDataList().subscribe((result) => {
    this.admiData = result;
    // console.log('teaData', this.admiData);
   
  });
}


}
