import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
//import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbCollapseModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
