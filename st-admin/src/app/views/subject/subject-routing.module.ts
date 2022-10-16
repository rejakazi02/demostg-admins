import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { SubjectListComponent } from './subject-list/subject-list.component';

const routes: Routes = [
  {
    path: '',
    data: { 
      title: 'Subjects',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },
      {
        path: 'subjectAdd',
        component: SubjectAddComponent,
        data: {
          title: 'Subject Add',
        },
      },
      {
        path: 'subjectList',
        component: SubjectListComponent,
        data: {
          title: 'Subject List',
        },
      },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
