import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoRoutingModule } from './repo.routing';
import { ListRepoComponent } from './list-repo/list-repo.component';
import { RepoService } from './repo.service';
import { CreateRepoComponent } from './create-repo/create-repo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    ListRepoComponent,
    CreateRepoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RepoRoutingModule,
  ],
  providers: [
    RepoService
  ]
})
export class RepoModule { }
