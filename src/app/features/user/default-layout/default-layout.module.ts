import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DefaultLayoutComponent } from './default-layout.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from 'src/app/shared/icons/icons.module';



@NgModule({
  declarations: [
    HeaderComponent,
    DefaultLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule
  ], exports: [
    HeaderComponent,
    DefaultLayoutComponent,
  ]
})
export class DefaultLayoutModule { }
