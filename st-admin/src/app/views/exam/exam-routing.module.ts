import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamAddComponent } from './exam-add/exam-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Exam',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'examAdd',
      },
      {
        path: 'examAdd',
        component: ExamAddComponent,
        data: {
          title: 'Exam Add',
        },
      },
      {
        path: 'examEdit/:id',
        component: ExamAddComponent,
        data: {
          title: 'Exam Add',
        },
      },
      {
        path: 'examList',
        component: ExamListComponent,
        data: {
          title: 'Exam List',
        },
      },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
