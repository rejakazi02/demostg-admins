import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SectionAddComponent } from './section-add/section-add.component';
import { SectionListComponent } from './section-list/section-list.component';
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


import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    SectionAddComponent,
    SectionListComponent
  ],
  imports: [
    CommonModule,
    SectionRoutingModule,
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
    MatSelectModule,
    MatMenuModule,
    MatChipsModule,
    ToastrModule, 
    MatDialogModule,
  ]
})
export class SectionModule { }
