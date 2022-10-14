import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';
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


@NgModule({
  declarations: [
    StudentAddComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
  
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
    ListGroupModule
  ]
})
export class StudentModule { }
