import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSitesComponent } from './list-sites/list-sites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { RouterModule } from '@angular/router';
import { siteRoutes } from './sites.routing';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { NgVarDirective } from 'src/app/shared/directive/ng-var.directive';
import { CreateSitesComponent } from './create-sites/create-sites.component';
import { CustomDirectivesModule } from 'src/app/shared/directive/custom-directives.module';



@NgModule({
  declarations: [
    ListSitesComponent,
    CreateSitesComponent
  ],
  imports: [
    CommonModule,
    CustomDirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(siteRoutes),
    MaterialModule,
    IconsModule
  ]
})
export class SitesModule { }
