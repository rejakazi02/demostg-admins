import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Department',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'departmentAdd',
      },
      {
        path: 'departmentAdd',
        component: DepartmentAddComponent,
        data: {
          title: 'Department Add',
        },
      },
      {
        path: 'departmentList',
        component: DepartmentListComponent,
        data: {
          title: 'Department List',
        },
      },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
