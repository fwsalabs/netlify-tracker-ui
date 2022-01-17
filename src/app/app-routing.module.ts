import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sites',
    pathMatch: 'full'
  },
  {
    path: "sites",
    loadChildren: () => import('./features/sites/sites.module').then(m => m.SitesModule)
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
