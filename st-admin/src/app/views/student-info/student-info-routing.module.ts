import { StudentInfoComponent } from './student-info/student-info.component';
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
        redirectTo: 'studentInfo',
      },
      {
        path: 'studentInfo',
        component: StudentInfoComponent,
        data: {
          title: ' Student Info',
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
export class StudentInfoRoutingModule { }
