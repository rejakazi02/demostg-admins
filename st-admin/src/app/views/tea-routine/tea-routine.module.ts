import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeaRoutineRoutingModule } from './tea-routine-routing.module';
import { TeaRoutineUpdateComponent } from './tea-routine-update/tea-routine-update.component';
import { TeaRoutineListComponent } from './tea-routine-list/tea-routine-list.component';
import { TeaRoutineAddComponent } from './tea-routine-add/tea-routine-add.component';
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


@NgModule({
  declarations: [
    TeaRoutineUpdateComponent,
    TeaRoutineListComponent,
    TeaRoutineAddComponent
  ],
  imports: [
    CommonModule,
    TeaRoutineRoutingModule,
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
export class TeaRoutineModule { }
