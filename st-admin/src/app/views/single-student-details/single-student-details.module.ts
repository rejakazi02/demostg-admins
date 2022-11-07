import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleStudentDetailsRoutingModule } from './single-student-details-routing.module';
import { SingleStudentDetailsListComponent } from './single-student-details-list/single-student-details-list.component';


@NgModule({
  declarations: [
    SingleStudentDetailsListComponent
  ],
  imports: [
    CommonModule,
    SingleStudentDetailsRoutingModule
  ]
})
export class SingleStudentDetailsModule { }
