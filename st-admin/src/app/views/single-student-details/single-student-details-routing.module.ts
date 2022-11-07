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
      // {
      //   path: 'subjectAdd',
      //   component: SubjectAddComponent,
      //   data: {
      //     title: 'Subject Add',
      //   },
      // },
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
