import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";

export const adminRoutes: Routes = [
    {
        path: "",
        component: AdminLayoutComponent,
        children: [
            {
                path: "",
                redirectTo: "projects",
                pathMatch: "full"
            },
            {
                path: "projects",
                loadChildren: () => import("./projects/projects.module").then(m => m.ProjectsModule)
            },
            {
                path: "sites",
                loadChildren: () => import("./sites/sites.module").then(m => m.SitesModule)
            }
        ]
    }
]