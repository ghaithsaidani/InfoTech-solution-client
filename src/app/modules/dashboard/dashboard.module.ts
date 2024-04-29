import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {BodyComponent} from "./body/body.component";
import {SideNavComponent} from "../../public/components/side-nav/side-nav.component";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SideNavComponent,
    MatBottomSheetModule,
  ]
})
export class DashboardModule { }
