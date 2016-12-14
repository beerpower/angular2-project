import {Routes, RouterModule} from "@angular/router";
import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.component";
import {CarListComponent} from "./cars/components/car-list.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: 'tasks', pathMatch: 'full'},
    {path: 'tasks', component: TaskListComponent, data: {title: 'TaskList'}},
    {path: 'about', component: AboutComponent, data: {title: 'About'}},
    {path: 'cars', component: CarListComponent, data: {title: 'Cars'}}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
