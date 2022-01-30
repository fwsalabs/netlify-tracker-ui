import { Routes } from "@angular/router";
import { DefaultLayoutComponent } from "./default-layout/default-layout.component";

export const userRoutes: Routes = [
    {
        path: "",
        component: DefaultLayoutComponent,
        children: [
            {
                path: "profile",
                loadChildren: () => import("./profile/profile.module").then(m => m.ProfileModule)
            }
        ]
    }
] 