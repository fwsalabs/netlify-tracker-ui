import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routing';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminLayoutModule,
    RouterModule.forChild(adminRoutes),
    MaterialModule,
  ]
})
export class AdminModule { }
