import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaRoutingModule } from './ava-routing.module';
import {AddComponent} from "./add/add.component";
import { ModifyComponent } from './modify/modify.component';
import { ConsultComponent } from './consult/consult.component';
import {MatTableComponent} from "../../public/components/mat-table/mat-table.component";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "../../core/services/user.service";
import {AvaService} from "../../core/services/ava.service";


@NgModule({
  declarations: [
    AddComponent,
    ModifyComponent,
    ConsultComponent
  ],
  imports: [
    CommonModule,
    AvaRoutingModule,
    MatTableComponent,
    HttpClientModule
  ],
  providers: [UserService,AvaService]
})
export class AvaModule { }
