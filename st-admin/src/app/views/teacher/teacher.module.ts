import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
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
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [

  
    TeacherListComponent,
        TeacherAddComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    
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
  ]
})
export class TeacherModule { }
