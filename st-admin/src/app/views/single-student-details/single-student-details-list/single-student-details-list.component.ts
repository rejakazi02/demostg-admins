import { StudentService } from './../../../service/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-student-details-list',
  templateUrl: './single-student-details-list.component.html',
  styleUrls: ['./single-student-details-list.component.scss']
})
export class SingleStudentDetailsListComponent implements OnInit {
  singleStudentId:any;
  singleStudentListData:any;
  constructor(
    private singleStudentSercice:StudentService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.singleStudentId=param.get('id')
  
    //  console.log(' this.sectionId',  this.sectionId)
    })
    this.singleStudentList();
  }


  singleStudentList() {
    this.singleStudentSercice.singleStudentList(this.singleStudentId).subscribe((result) => {
    this.singleStudentListData = result;

    // console.log('single Student List Data',this.singleStudentListData);
    
  });

}

}
