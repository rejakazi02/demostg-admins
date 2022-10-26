import { SectionListComponent } from './section-list/section-list.component';
import { SectionAddComponent } from './section-add/section-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { 
      title: 'Section',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sectionAdd',
      },
      {
        path: 'sectionAdd',
        component: SectionAddComponent,
        data: {
          title: 'Section Add',
        },
      },
      {
        path: 'sectionList',
        component: SectionListComponent,
        data: {
          title: 'Section List',
        },
      },
      


    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
