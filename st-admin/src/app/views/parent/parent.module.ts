import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
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



@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
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
  ]
})
export class ParentModule { }
