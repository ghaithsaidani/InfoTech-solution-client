import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BodyComponent} from "./body/body.component";

const routes: Routes = [
  {
    path: '',component:BodyComponent, children: [
      {path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule)},
      {path: 'ava', loadChildren: () => import('../ava/ava.module').then(m => m.AvaModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
