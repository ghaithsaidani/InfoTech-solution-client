import { Routes } from '@angular/router';
import {DashboardModule} from "./modules/dashboard/dashboard.module";

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard/users', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
];
