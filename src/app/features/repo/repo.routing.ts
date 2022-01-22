import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRepoComponent } from './create-repo/create-repo.component';
import { ListRepoComponent } from './list-repo/list-repo.component';

const routes: Routes = [
  {
    path: "",
    component: ListRepoComponent
  },
  {
    path: "create",
    component: CreateRepoComponent
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoRoutingModule { }
