import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamResultRoutingModule } from './exam-result-routing.module';
import { ExamResultListComponent } from './exam-result-list/exam-result-list.component';


@NgModule({
  declarations: [
    ExamResultListComponent
  ],
  imports: [
    CommonModule,
    ExamResultRoutingModule
  ]
})
export class ExamResultModule { }
