import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../shared/services/navBar.service';
import { LoaderService } from '../shared/services/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  sideNavOpen: boolean = true;
  loaderStatus: boolean;
  constructor(private navBarService: NavBarService,
              private loaderService:LoaderService) { }

  ngOnInit() {
    this.navBarService.isSideNavOpen.subscribe((flag) => {
      this.sideNavOpen = flag;
    });

    this.loaderService.loaderStatusChanged.subscribe((status:boolean) => {
      console.log('loader status is '+status);
      this.loaderStatus = status;
    })
  }

}
