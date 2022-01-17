import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListSiteComponent } from './list-site/list-site.component';
import { SitesRoutingModule } from './sites.routing';
import { SitesService } from './sites.service';


@NgModule({
  declarations: [
    ListSiteComponent
  ],
  imports: [
    CommonModule,
    SitesRoutingModule,
    HttpClientModule
  ],
  providers: [
    SitesService
  ]
})
export class SitesModule { }
