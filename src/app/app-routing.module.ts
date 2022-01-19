import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './core/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sites',
    pathMatch: 'full'
  },
  {
    path: "oauth2/code/github",
    component: AuthComponent
  },
  {
    path: "sites",
    loadChildren: () => import('./features/sites/sites.module').then(m => m.SitesModule)
  },
  {
    path: "repos",
    loadChildren: () => import('./features/repo/repo.module').then(m => m.RepoModule)
  },
  {
    path: '**',
    redirectTo: 'sites',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
