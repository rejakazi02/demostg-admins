import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoomRoutingModule } from './class-room-routing.module';
import { ClassRoomAddComponent } from './class-room-add/class-room-add.component';
import { ClassRoomListComponent } from './class-room-list/class-room-list.component';

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
    ClassRoomAddComponent,
    ClassRoomListComponent
  ],
  imports: [
    CommonModule,
    ClassRoomRoutingModule,
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
export class ClassRoomModule { }
