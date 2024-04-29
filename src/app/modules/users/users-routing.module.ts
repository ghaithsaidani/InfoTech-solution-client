import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsultComponent} from "./consult/consult.component";
import {ModifyComponent} from "./modify/modify.component";
import {AddComponent} from "./add/add.component";

const routes: Routes = [
  { path: '',children:[
      {path:'',component:ConsultComponent},
      {path:'add',component:AddComponent},
      {path:'update',component:ModifyComponent},

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
