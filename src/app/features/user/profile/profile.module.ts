import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { profileRouting } from './profile.routing';
import { NgVarDirective } from 'src/app/shared/directive/ng-var.directive';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CustomDirectivesModule } from 'src/app/shared/directive/custom-directives.module';
import { AccountComponent } from './account/account.component';
import { IntegrationComponent } from './integration/integration.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { PortalModule } from '@angular/cdk/portal';



@NgModule({
  declarations: [
    ProfileComponent,
    AccountComponent,
    IntegrationComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(profileRouting),
    CustomDirectivesModule,
    // MaterialModule,
    PortalModule
  ]
})
export class ProfileModule { }
