import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopbarComponent } from './topbar/topbar.component';
import { DownbarComponent } from './downbar/downbar.component';
import { RoutehomeComponent } from '../routehome/routehome.component';
import { Route1Component } from '../routehome/route1/route1.component';
import { Route1AComponent } from '../routehome/route1/route1-a/route1-a.component';
import { Route1BComponent } from '../routehome/route1/route1-b/route1-b.component';
import { Route1CComponent } from '../routehome/route1/route1-c/route1-c.component';
import { Route2Component } from '../routehome/route2/route2.component';
import { Route2AComponent } from '../routehome/route2/route2-a/route2-a.component';
import { Route2BComponent } from '../routehome/route2/route2-b/route2-b.component';
import { Route2CComponent } from '../routehome/route2/route2-c/route2-c.component';
import { Route3Component } from '../routehome/route3/route3.component';
import { Route3AComponent } from '../routehome/route3/route3-a/route3-a.component';
import { Route3BComponent } from '../routehome/route3/route3-b/route3-b.component';
import { Route3CComponent } from '../routehome/route3/route3-c/route3-c.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

const layoutRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(layoutRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}