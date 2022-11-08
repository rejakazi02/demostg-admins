import { SingleStudentDetailsUpdateComponent } from './single-student-details-update/single-student-details-update.component';
import { SingleStudentDetailsListComponent } from './single-student-details-list/single-student-details-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { 
      title: 'Student Details',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'studentDetails',
      },
      {
        path: 'studentDetailsUpdate',
        component: SingleStudentDetailsUpdateComponent,
        data: {
          title: 'Student Details Update',
        },
      },
      {
        path: 'studentDetailsUpdateList/:id',
        component: SingleStudentDetailsUpdateComponent,
        data: {
          title: 'Student Details Update',
        },
      },
      {
        path: 'studentDetails',
        component: SingleStudentDetailsListComponent,
        data: {
          title: 'Student Details',
        },
      },
      {
        path: 'singleStudentDetailsList/:id',
        component: SingleStudentDetailsListComponent,
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
export class SingleStudentDetailsRoutingModule { }
