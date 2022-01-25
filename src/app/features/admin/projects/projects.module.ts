import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './list-project/list-project.component';
import { projectsRoutes } from './projects.routing';
import { RouterModule } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';

@NgModule({
  declarations: [
    ListProjectComponent,
    CreateProjectComponent,
    DetailProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(projectsRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    IconsModule
  ]
})
export class ProjectsModule { }
