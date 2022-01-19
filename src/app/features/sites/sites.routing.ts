import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { CreateSiteComponent } from './create-site/create-site.component';
import { ListSiteComponent } from './list-site/list-site.component';

const routes: Routes = [
    {
        path: '',
        component: ListSiteComponent
    },
    {
        path: 'create',
        component: CreateSiteComponent,
        canActivate: [AuthGuard]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SitesRoutingModule { }
