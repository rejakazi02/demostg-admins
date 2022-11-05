import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentInfoRoutingModule } from './student-info-routing.module';
import { StudentInfoComponent } from './student-info/student-info.component';


@NgModule({
  declarations: [
    StudentInfoComponent
  ],
  imports: [
    CommonModule,
    StudentInfoRoutingModule
  ]
})
export class StudentInfoModule { }
