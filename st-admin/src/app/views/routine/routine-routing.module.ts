import { RoutineAddComponent } from './routine-add/routine-add.component';
import { RoutineListComponent } from './routine-list/routine-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { 
      title: 'Routine Details',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'routineDetails',
      },
      {
        path: 'routineAdd',
        component: RoutineAddComponent,
        data: {
          title: 'Routine Add',
        },
      },
      {
        path: 'routineEdit/:id',
        component: RoutineAddComponent,
        data: {
          title: 'Routine Add',
        },
      },
      {
        path: 'routineList',
        component: RoutineListComponent,
        data: {
          title: 'Routine List',
        },
      },
      
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutineRoutingModule { }
