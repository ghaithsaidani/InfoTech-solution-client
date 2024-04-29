import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SideNavToggle} from "../../shared/types/side-nav-toggle";
import {NavbarData} from "../../shared/types/navbar-data";
import {StorageService} from "../../../core/services/storage.service";
import {DataService} from "../../../core/services/data.service";
import {Role} from "../../shared/enums/role";
import {NavbarHelper} from "../../helpers/navbar-helper";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatTooltipModule} from "@angular/material/tooltip";
import {NgClass} from "@angular/common";

@Component({
  selector: 'side-nav',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    RouterLink,
    RouterLinkActive,
    NgClass
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent implements OnInit{

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false
  screenWidth = 0
  actualRole = this.storageService.getUser()?.role
  navbarData: NavbarData[] = []
  constructor(private storageService:StorageService,private dataService:DataService) {
  }

  ngOnInit() {
    this.dataService.isAdmin= true
    /*this.dataService.isAgent= this.actualRole===Role.Agent
    this.dataService.isServiceEtranger= this.actualRole===Role.ServiceEtranger*/
    this.navbarData = NavbarHelper.initializeNavbarData(this.dataService.isAdmin)
    this.screenWidth = window.innerWidth
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed})
  }

  sideNavClosed() {
    this.collapsed = false
    this.onToggleSideNav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed})
  }
}
