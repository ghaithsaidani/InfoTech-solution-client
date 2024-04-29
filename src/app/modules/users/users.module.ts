import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import {ConsultComponent} from "./consult/consult.component";
import {AddComponent} from "./add/add.component";
import {ModifyComponent} from "./modify/modify.component";
import {MatTableComponent} from "../../public/components/mat-table/mat-table.component";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "../../core/services/user.service";


@NgModule({
  declarations: [
    ConsultComponent,
    AddComponent,
    ModifyComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        MatTableComponent,
      HttpClientModule
    ],
  providers:[UserService]
})
export class UsersModule { }
