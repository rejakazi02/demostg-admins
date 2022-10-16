import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

const routes: Routes = [
  {
    path: '',
    data: { 
      title: 'Teachers',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },
      {
        path: 'teacherAdd',
        component: TeacherAddComponent,
        data: {
          title: 'Teacher Add',
        },
      },
      {
        path: 'teacherList',
        component: TeacherListComponent,
        data: {
          title: 'Teacher List',
        },
      },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
