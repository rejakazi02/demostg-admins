import { ClassRoomListComponent } from './class-room-list/class-room-list.component';
import { ClassRoomAddComponent } from './class-room-add/class-room-add.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Class Room',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'classRoomAdd',
      },
      {
        path: 'classRoomAdd',
        component: ClassRoomAddComponent,
        data: {
          title: 'Class Room Add',
        },
      },
      {
        path: 'classRoomList',
        component: ClassRoomListComponent,
        data: {
          title: ' Class Room List',
        },
      },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoomRoutingModule { }
