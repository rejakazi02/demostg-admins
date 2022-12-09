import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamResultRoutingModule } from './exam-result-routing.module';
import { ExamResultListComponent } from './exam-result-list/exam-result-list.component';
import { ExamResultAddComponent } from './exam-result-add/exam-result-add.component';

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
import { ExamResultUpdateComponent } from './exam-result-update/exam-result-update.component';

@NgModule({
  declarations: [
    ExamResultListComponent,
    ExamResultAddComponent,
    ExamResultUpdateComponent
  ],
  imports: [
    CommonModule,
    ExamResultRoutingModule,
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
export class ExamResultModule { }
