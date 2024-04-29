import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsultComponent} from "./consult/consult.component";
import {AddComponent} from "./add/add.component";
import {ModifyComponent} from "./modify/modify.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', component: ConsultComponent},
      {path: 'add', component: AddComponent},
      {path: 'update', component: ModifyComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaRoutingModule {
}
