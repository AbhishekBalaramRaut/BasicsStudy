import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouteHomeRoutingModule } from './routehome-routing.module';
import { RoutehomeComponent } from './routehome.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { Route1AComponent } from './route1/route1-a/route1-a.component';
import { Route1BComponent } from './route1/route1-b/route1-b.component';
import { Route1CComponent } from './route1/route1-c/route1-c.component';
import { Route2CComponent } from './route2/route2-c/route2-c.component';
import { Route2BComponent } from './route2/route2-b/route2-b.component';
import { Route2AComponent } from './route2/route2-a/route2-a.component';
import { Route3AComponent } from './route3/route3-a/route3-a.component';
import { Route3BComponent } from './route3/route3-b/route3-b.component';
import { Route3CComponent } from './route3/route3-c/route3-c.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RoutehomeComponent,
    Route1Component,
    Route2Component,
    Route3Component,
    Route1AComponent,
    Route1BComponent,
    Route1CComponent,
    Route2CComponent,
    Route2BComponent,
    Route2AComponent,
    Route3AComponent,
    Route3BComponent,
    Route3CComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouteHomeRoutingModule
  ],
  providers: []
})
export class RouteHomeModule { }
