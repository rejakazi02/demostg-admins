import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentsAddComponent } from './parents-add/parents-add.component';
import { ParentsListComponent } from './parents-list/parents-list.component';

const routes: Routes = [
  {
    path: '',
    data: { 
      title: 'Parents',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cards',
      },
      {
        path: 'parentsAdd',
        component: ParentsAddComponent,
        data: {
          title: 'Parents Add',
        },
      },
      {
        path: 'parentsList',
        component: ParentsListComponent,
        data: {
          title: 'Parents List',
        },
      },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
