import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutehomeComponent } from './routehome.component';
import { Route1Component } from './route1/route1.component';
import { Route1AComponent } from './route1/route1-a/route1-a.component';
import { Route1BComponent } from './route1/route1-b/route1-b.component';
import { Route1CComponent } from './route1/route1-c/route1-c.component';
import { Route2Component } from './route2/route2.component';
import { Route2AComponent } from './route2/route2-a/route2-a.component';
import { Route2BComponent } from './route2/route2-b/route2-b.component';
import { Route2CComponent } from './route2/route2-c/route2-c.component';
import { Route3Component } from './route3/route3.component';
import { Route3AComponent } from './route3/route3-a/route3-a.component';
import { Route3BComponent } from './route3/route3-b/route3-b.component';
import { Route3CComponent } from './route3/route3-c/route3-c.component';

const routeHomeRoutes: Routes = [
    { path: 'home', component: RoutehomeComponent },
    {
        path: 'home/route1/:id', component: Route1Component,
        children: [
            { path: 'route1A', component: Route1AComponent },
            { path: 'route1B', component: Route1BComponent },
            { path: 'route1C', component: Route1CComponent }
        ]
    },
    {
        path: 'home/route2', component: Route2Component,
        children: [
            { path: 'route2A', component: Route2AComponent },
            { path: 'route2B', component: Route2BComponent },
            { path: 'route2C', component: Route2CComponent }
        ]
    },
    {
        path: 'home/route3', component: Route3Component,
        children: [
            { path: 'route3A', component: Route3AComponent },
            { path: 'route3B', component: Route3BComponent },
            { path: 'route3C', component: Route3CComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routeHomeRoutes)
    ],
    exports: [RouterModule]
})
export class RouteHomeRoutingModule {
}