import { DepartmentService } from './../../../service/department.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
deptListData:any;
  constructor(private deptService: DepartmentService) { }

  ngOnInit(): void {
    this.departList();
    }


  departList() {
    this.deptService.departList().subscribe((result) => {
      this.deptListData = result;
      console.log('deptListData', this.deptListData);
     

    });
  }


  deleteDepData(id: string) {
    this.deptService.deleteDepData(id).subscribe((result) => {
      window.location.reload();
      alert(' Data Delete Successfull');
    });
  }
}
