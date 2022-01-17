import { Component, OnInit } from '@angular/core';
import { SitesService } from '../sites.service';

@Component({
  selector: 'app-list-site',
  templateUrl: './list-site.component.html'
})
export class ListSiteComponent implements OnInit {

  siteList: any;

  constructor(
    private sitesService: SitesService
  ) { }

  ngOnInit(): void {
    this.siteList = this.sitesService.getSites()
      // .subscribe(res => {
      //   console.log(res);
      //   this.siteList = res;
      // });
  }



}
