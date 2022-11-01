import { ClassService } from 'src/app/service/class.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-class-room-list',
  templateUrl: './class-room-list.component.html',
  styleUrls: ['./class-room-list.component.scss']
})
export class ClassRoomListComponent implements OnInit {

  classRoomListData:any;
  constructor(private classRoomService: ClassService) { }

  ngOnInit(): void {
    this.classRoomList();
  }


  classRoomList() {
    this.classRoomService.classRoomList().subscribe((result) => {
      this.classRoomListData = result;
      
     

    });
  }

  confirmBox(id: string) {
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
        this.classRoomService.deleteSclassRoomData(id).subscribe((result) => {
          this.classRoomList();
        });



      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
}
