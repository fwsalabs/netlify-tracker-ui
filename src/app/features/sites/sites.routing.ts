import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSiteComponent } from './create-site/create-site.component';
import { ListSiteComponent } from './list-site/list-site.component';

const routes: Routes = [
    {
        path: '',
        component: ListSiteComponent
    },
    {
        path: 'create',
        component: CreateSiteComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SitesRoutingModule { }
