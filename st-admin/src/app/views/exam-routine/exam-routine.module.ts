import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutineRoutingModule } from './exam-routine-routing.module';
import { ExamRoutineAddComponent } from './exam-routine-add/exam-routine-add.component';
import { ExamRoutineListComponent } from './exam-routine-list/exam-routine-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ExamRoutineAddComponent,
    ExamRoutineListComponent
  ],
  imports: [
    CommonModule,
    ExamRoutineRoutingModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule, 
    DropdownModule,
    SharedModule,
    ListGroupModule,
     MatIconModule,
     MatMenuModule,
     MatSelectModule,
     ToastrModule, 
  ]
})
export class ExamRoutineModule { }
