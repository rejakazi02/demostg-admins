import { TeaRoutineListComponent } from './tea-routine-list/tea-routine-list.component';
import { TeaRoutineUpdateComponent } from './tea-routine-update/tea-routine-update.component';
import { TeaRoutineAddComponent } from './tea-routine-add/tea-routine-add.component';
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
        component: TeaRoutineAddComponent,
        data: {
          title: 'Routine Add',
        },
      },
      {
        path: 'routineUpdate',
        component: TeaRoutineUpdateComponent,
        data: {
          title: 'Routine update',
        },
      },
      {
        path: 'routineUpdateEdit/:id',
        component: TeaRoutineUpdateComponent,
        data: {
          title: 'Routine update',
        },
      },
      {
        path: 'routineList',
        component: TeaRoutineListComponent,
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
export class TeaRoutineRoutingModule { }
