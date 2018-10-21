import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavBarService } from './services/navBar.service';
import { LoaderService } from './services/loader.service';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
  ],
  providers: [NavBarService,LoaderService],
  bootstrap: []
})
export class SharedModule { }
