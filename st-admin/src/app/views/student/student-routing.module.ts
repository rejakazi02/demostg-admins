import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Student',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },
      {
        path: 'studentAdd',
        component: StudentAddComponent,
        data: {
          title: 'Student Add',
        },
      },
      {
        path: 'studentList',
        component: StudentListComponent,
        data: {
          title: 'Student List',
        },
      },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
