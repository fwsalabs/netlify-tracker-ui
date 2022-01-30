import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavRoute, ThemeService } from 'src/app/shared/theme.service';
import { DefaultLayoutService } from '../default-layout.service';

@Component({
  selector: 'mep-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  showProfileDropdown = false;
  navItems!: Observable<NavRoute[]>;
  showSidebar!: Observable<boolean>;

  constructor(
    private defaultLayoutService: DefaultLayoutService,
    private themeService: ThemeService
  ) { }


  ngOnInit(): void {
    this.showSidebar = this.defaultLayoutService.showSidebar;
    this.navItems = this.themeService.navList;
  }

  toggleSidebar() {
    this.defaultLayoutService.toggleSidebar();
  }

  toggleProfileDropdown() {
    this.showProfileDropdown = !this.showProfileDropdown;
  }

}
