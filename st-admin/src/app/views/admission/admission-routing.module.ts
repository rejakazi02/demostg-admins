import { AdmissionListComponent } from './admission-list/admission-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'Admission ',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admissionList',
      },
      {
        path: 'admissionList',
        component: AdmissionListComponent,
        data: {
          title: 'Admission List',
        },
      },
      // {
      //   path: 'examResultEdit',
      //   component: ExamResultUpdateComponent,
      //   data: {
      //     title: 'Exam Result Add',
      //   },
      // },
      // {
      //   path: 'examResultEdit/:id',
      //   component: ExamResultUpdateComponent,
      //   data: {
      //     title: 'Exam Result Add',
      //   },
      // },
      // {
      //   path: 'examResultList',
      //   component: ExamResultListComponent,
      //   data: {
      //     title: 'Exam Result List',
      //   },
      // },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }
