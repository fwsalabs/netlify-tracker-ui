import { Routes } from "@angular/router";
import { ListUserProjectComponent } from "./list-user-project/list-user-project.component"

export const userProjectsRoutes: Routes = [
    {
        path: "",
        component: ListUserProjectComponent
    }, {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
    }
]