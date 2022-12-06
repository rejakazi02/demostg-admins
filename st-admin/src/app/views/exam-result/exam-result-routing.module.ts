import { ExamResultListComponent } from './exam-result-list/exam-result-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Exam Result ',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'examAdd',
      },
      {
        path: 'examAdd',
        // component: ExamAddComponent,
        data: {
          title: 'Exam Add',
        },
      },
      {
        path: 'examEdit/:id',
        // component: ExamAddComponent,
        data: {
          title: 'Exam Add',
        },
      },
      {
        path: 'examResultList',
        component: ExamResultListComponent,
        data: {
          title: 'Exam Result List',
        },
      },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamResultRoutingModule { }
