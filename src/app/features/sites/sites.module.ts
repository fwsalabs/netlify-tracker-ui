import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListSiteComponent } from './list-site/list-site.component';
import { SitesRoutingModule } from './sites.routing';
import { SitesService } from './sites.service';
import { CreateSiteComponent } from './create-site/create-site.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListSiteComponent,
    CreateSiteComponent
  ],
  imports: [
    CommonModule,
    SitesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SitesService
  ]
})
export class SitesModule { }
