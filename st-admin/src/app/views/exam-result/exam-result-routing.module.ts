import { ExamResultUpdateComponent } from './exam-result-update/exam-result-update.component';
import { ExamResultAddComponent } from './exam-result-add/exam-result-add.component';
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
        redirectTo: 'examResultAdd',
      },
      {
        path: 'examResultAdd',
        component: ExamResultAddComponent,
        data: {
          title: 'Exam Result Add',
        },
      },
      {
        path: 'examResultEdit',
        component: ExamResultUpdateComponent,
        data: {
          title: 'Exam Result Add',
        },
      },
      {
        path: 'examResultEdit/:id',
        component: ExamResultUpdateComponent,
        data: {
          title: 'Exam Result Add',
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
