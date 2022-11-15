import { ActivatedRoute } from '@angular/router';
import { ClassService } from './../../../service/class.service';
import { Component, OnInit, QueryList } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { SectionTeacherAddComponent } from '../../section/section-teacher-add/section-teacher-add.component';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss'],
})
export class SectionListComponent implements OnInit {
  classListData: any;
  sectionDatas: any;
  item: any;
  sectionListData: any;
  itemss: any;
  sectionListDataaa: any;
  id: any;
  section = true;

  constructor(
    private classService: ClassService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');

      if (this.id) {
        this.sectionList();
      }
    });
  }

  // classtList() {
  //   this.classService.classtList().subscribe((result) => {
  //     this.classListData = result;
  //      this.itemss=this.classListData.classes;
  //     this.sectionListDataaa= this.itemss?.sections;
  //     console.log('asahgjkhj',this.sectionListDataaa);

  //   });
  // }
  sectionList() {
    this.classService.sectionList(this.id).subscribe((result) => {
      this.sectionListDataaa = result;

      console.log('section', this.sectionListDataaa);
    });
  }

  // open dilog dection start

  openDialog(sectionId: number) {
    const dialogRef = this.dialog.open(SectionTeacherAddComponent, {
      data: {
        claData: this.id,
        secData: sectionId,
      },
    });
    console.log('dialogRef', sectionId);

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
    this.section = false;
  }

  // delete section
  confirmBox(data: any) {
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
        this.classService
          .deleteSectionData(data, this.id)
          .subscribe((result) => {
            console.log('section data', result);

            this.sectionList();
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
}
