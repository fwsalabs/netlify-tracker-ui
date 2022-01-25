import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutModule } from './default-layout/default-layout.module';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routing';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultLayoutModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserModule { }
