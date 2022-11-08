import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleStudentDetailsRoutingModule } from './single-student-details-routing.module';
import { SingleStudentDetailsListComponent } from './single-student-details-list/single-student-details-list.component';
import { SingleStudentDetailsUpdateComponent } from './single-student-details-update/single-student-details-update.component';

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
import {MatDialogModule} from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    SingleStudentDetailsListComponent,
    SingleStudentDetailsUpdateComponent
  ],
  imports: [
    CommonModule,
    SingleStudentDetailsRoutingModule,
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
     MatDialogModule,
     ToastrModule,
  ]
})
export class SingleStudentDetailsModule { }
