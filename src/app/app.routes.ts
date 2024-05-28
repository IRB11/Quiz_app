import { Routes } from '@angular/router';
import LevelComponent from './pages/level/level.component';

export const routes: Routes = [

    {
        path: "level",
        loadComponent: () => import("../app/pages/level/level.component")
    },
    {
        path: "home",
        loadComponent: () => import("../app/home/home.component")
    },{
            path: "techno",
        loadComponent: () => import("../app/pages/technology/technology.component")
    }
];
