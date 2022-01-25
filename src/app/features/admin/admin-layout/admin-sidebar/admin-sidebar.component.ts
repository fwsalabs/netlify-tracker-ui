import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavRoute, ThemeService } from 'src/app/shared/theme.service';
import { AdminLayoutService } from '../admin-layout.service';

@Component({
  selector: 'mep-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styles: [
  ]
})
export class AdminSidebarComponent implements OnInit {

  navItems!: Observable<NavRoute[]>;
  showSidebar!: Observable<boolean>;
  viewPort = "mobile";
  srcWidth!: number;

  constructor(
    private adminLayoutService: AdminLayoutService,
    private themeService: ThemeService,
  ) { }

  ngOnInit(): void {
    this.themeService.srcWidth.subscribe((res: number) => this.srcWidth = res);
    this.showSidebar = this.adminLayoutService.showSidebar;
    this.navItems = this.themeService.navList;
  }

  toggleSidebar() {
    this.adminLayoutService.toggleSidebar();
  }

}
