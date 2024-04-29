import { Component } from '@angular/core';
import {SideNavToggle} from "../../../public/shared/types/side-nav-toggle";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  isSideNavCollapsed= false;
  screenWidth=0;
  onToggleSideNav(data:SideNavToggle){
    this.screenWidth=data.screenWidth
    this.isSideNavCollapsed=data.collapsed
  }

  getBodyClass():string{
    let styleClass = ''
    if(this.isSideNavCollapsed && this.screenWidth>768){
      styleClass='body-trimmed'
    }
    if(this.isSideNavCollapsed && this.screenWidth<=768 && this.screenWidth>0){
      styleClass='body-md-screen'
    }
    return styleClass
  }
}
