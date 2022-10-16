import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassAddComponent } from './class-add/class-add.component';
import { ClassListComponent } from './class-list/class-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Class',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },
      {
        path: 'classAdd',
        component: ClassAddComponent,
        data: {
          title: 'Class Add',
        },
      },
      {
        path: 'classList',
        component: ClassListComponent,
        data: {
          title: 'class List',
        },
      },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
