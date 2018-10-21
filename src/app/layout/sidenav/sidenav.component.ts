import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../shared/services/navBar.service';
import { Isidenav } from '../../shared/interfaces/sidenav';
import { LoaderService } from '../../shared/services/loader.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sideNavOpen:boolean;
  isCollapsed:boolean;
  sidenav:Isidenav[];

  constructor(private navBarService: NavBarService,
              private loaderService: LoaderService) { }

  ngOnInit() {
    this.sideNavOpen = true;
    this.loaderService.startLoader();
    this.navBarService.getSidenav().subscribe((response) => {
      this.loaderService.endLoader();
      console.log(response);
    });
  }

  toggleSideNav() {
    this.sideNavOpen = !this.sideNavOpen;
    this.navBarService.isSideNavOpen.next(this.sideNavOpen);
  }
}
