import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from 'src/app/shared/icons/icons.module';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminSidebarComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule
  ], exports: [
    AdminLayoutComponent,
    AdminSidebarComponent,
    AdminHeaderComponent
  ]
})
export class AdminLayoutModule { }
