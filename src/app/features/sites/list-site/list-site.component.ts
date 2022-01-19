import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { SitesService } from '../sites.service';

@Component({
  selector: 'app-list-site',
  templateUrl: './list-site.component.html'
})
export class ListSiteComponent implements OnInit {

  siteList: any;

  constructor(
    private sitesService: SitesService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.siteList = this.sitesService.getSites();
  }


  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}
