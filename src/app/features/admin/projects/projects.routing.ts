import { Routes } from "@angular/router";
import { DetailProjectComponent } from "./detail-project/detail-project.component";
import { ListProjectComponent } from "./list-project/list-project.component";

export const projectsRoutes: Routes = [
    { path: "", component: ListProjectComponent },
    { path: ":id", component: DetailProjectComponent },
]