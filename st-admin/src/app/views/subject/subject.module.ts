import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { SubjectListComponent } from './subject-list/subject-list.component';



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
import { ToastrModule } from 'ngx-toastr';

import {MatButtonModule} from '@angular/material/button';
// import {NgxPaginationModule} from 'ngx-pagination';

import { MatSelectFilterModule } from 'mat-select-filter';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
   
  
    SubjectAddComponent,
           SubjectListComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
  
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
     MatSelectFilterModule,
     ToastrModule,
     MatButtonModule,
     MatFormFieldModule,
     MatSelectModule

    
  ]
})
export class SubjectModule { }
