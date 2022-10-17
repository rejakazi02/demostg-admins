import { Component, OnInit } from '@angular/core';
import { TeacherService } from './../../../service/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  teaData:any;
  constructor(  private teaService: TeacherService) { }

  ngOnInit(): void {
    this.teaList();
  }


  teaList() {
    this.teaService.teaList().subscribe((result) => {
      this.teaData = result;
      console.log('teaData', this.teaData);
     
    });
  }

 
  deleteTeaData(id: string) {
    this.teaService.deleteTeaData(id).subscribe((result) => {
      // window.location.reload();
      alert(' Data Delete Successfull');
    
    });
  }

}
