import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserProjectComponent } from './list-user-project/list-user-project.component';
import { RouterModule } from '@angular/router';
import { userProjectsRoutes } from './user-projects.routing';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { CustomDirectivesModule } from 'src/app/shared/directive/custom-directives.module';
import { CreateUserProjectComponent } from './create-user-project/create-user-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListUserProjectComponent,
    CreateUserProjectComponent
  ],
  imports: [
    CommonModule,
    CustomDirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userProjectsRoutes),
    MaterialModule,
  ]
})
export class UserProjectsModule { }
