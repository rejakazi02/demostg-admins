import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherInfoRoutingModule } from './teacher-info-routing.module';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';


@NgModule({
  declarations: [
    TeacherInfoComponent
  ],
  imports: [
    CommonModule,
    TeacherInfoRoutingModule
  ]
})
export class TeacherInfoModule { }
