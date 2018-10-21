import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouteHomeModule } from '../routehome/routehome.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { TopbarComponent } from './topbar/topbar.component';
import { DownbarComponent } from './downbar/downbar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { AdsComponent } from './ads/ads.component';
import {ProductService} from '../product.service';
import { NavBarService } from '../shared/services/navBar.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    TopbarComponent,
    DownbarComponent,
    PageNotFoundComponent,
    SidenavComponent,
    MainComponent,
    AdsComponent,
    LayoutComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouteHomeModule,
    DashboardModule,
    LayoutRoutingModule,
    SharedModule
  ],
  exports: [LayoutComponent],
  providers: [ProductService,NavBarService],
  bootstrap: []
})
export class LayoutModule { }
