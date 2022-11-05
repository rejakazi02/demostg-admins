import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { 
      title: 'Teacher',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'teacherInfo',
      },
      {
        path: 'teacherInfo',
        component: TeacherInfoComponent,
        data: {
          title: 'Teacher Info',
        },
      },
      // {
      //   path: 'sectionList',
      //   component: SectionListComponent,
      //   data: {
      //     title: 'Section List',
      //   },
      // },
      // {
      //   path: 'classes/:id',
      //   component: SectionListComponent,
      //   data: {
      //     title: 'Institute Add',
      //   },
      // },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherInfoRoutingModule { }
