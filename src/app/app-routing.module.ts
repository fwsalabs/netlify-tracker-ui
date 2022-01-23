import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './common/layout/layout.component';
import { AuthComponent } from './core/auth/auth.component';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './core/auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sites',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: LoginComponent
  },
  {
    path: "oauth2/code/github",
    component: AuthComponent
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "sites",
        loadChildren: () => import('./features/sites/sites.module').then(m => m.SitesModule),
        canActivate: [AuthGuard]
      },
      {
        path: "repos",
        loadChildren: () => import('./features/repo/repo.module').then(m => m.RepoModule),
        canActivate: [AuthGuard]
      },

    ]
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
