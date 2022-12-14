import { ExamRoutineUpdateComponent } from './exam-routine-update/exam-routine-update.component';
import { ExamRoutineListComponent } from './exam-routine-list/exam-routine-list.component';
import { ExamRoutineAddComponent } from './exam-routine-add/exam-routine-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Exam Routine',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'examRoutineAdd',
      },
      {
        path: 'examRoutineAdd',
        component: ExamRoutineAddComponent,
        data: {
          title: 'Exam Routine Add',
        },
      },
      {
        path: 'examRoutineUpdate',
        component: ExamRoutineUpdateComponent,
        data: {
          title: 'Exam Routine update',
        },
      },
      {
        path: 'examRoutineUpdateEdit/:id',
        component: ExamRoutineUpdateComponent,
        data: {
          title: 'Exam Routine update',
        },
      },
      {
        path: 'examRoutineList',
        component: ExamRoutineListComponent,
        data: {
          title: 'Exam Routine List',
        },
      },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutineRoutingModule { }
