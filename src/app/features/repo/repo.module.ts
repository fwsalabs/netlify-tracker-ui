import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoRoutingModule } from './repo.routing';
import { ListRepoComponent } from './list-repo/list-repo.component';
import { RepoService } from './repo.service';


@NgModule({
  declarations: [
    ListRepoComponent
  ],
  imports: [
    CommonModule,
    RepoRoutingModule
  ],
  providers: [
    RepoService
  ]
})
export class RepoModule { }
