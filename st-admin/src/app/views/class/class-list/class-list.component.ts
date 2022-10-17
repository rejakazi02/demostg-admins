import { ClassService } from './../../../service/class.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {
  classListData:any
  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this. classtList();
  }


  classtList() {
    this.classService.classtList().subscribe((result) => {
      this.classListData = result;
      console.log('deptListData', this.classListData);
     

    });
  }


  deleteClassData(id: string) {
    this.classService.deleteClassData(id).subscribe((result) => {
      window.location.reload();
      alert(' Class Data Delete Successfull');
    });
  }
}
