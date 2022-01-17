import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSiteComponent } from './list-site/list-site.component';

const routes: Routes = [
    {
        path: '',
        component: ListSiteComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SitesRoutingModule { }
