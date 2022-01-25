import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoleGuard } from './core/auth/admin-role.guard';
import { AuthComponent } from './core/auth/auth.component';
import { AuthGuard } from './core/auth/auth.guard';
import { UserRoleGuard } from './core/auth/user-role.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "oauth2/code/github",
    component: AuthComponent
  },
  {
    path: "user",
    loadChildren: () => import("./features/user/user.module").then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: "admin",
    loadChildren: () => import("./features/admin/admin.module").then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
