import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavBarService } from '../shared/services/navBar.service';
import { LoaderService } from '../shared/services/loader.service';
import { Isidenav } from '../shared/interfaces/sidenav';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations:[
    trigger('openClose', [
    state('open', style({
      transform: 'rotate(90deg)' 
    })),
    state('closed', style({
      transform: 'rotate(0)' 
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ])
  ]
})
export class LayoutComponent implements OnInit {

  sideNavOpen: boolean = true;
  loaderStatus: boolean;
  sidenav:Isidenav[];
  isOpen = true;
  
    toggle() {
      this.isOpen = !this.isOpen;
    }
  constructor(private navBarService: NavBarService,
              private loaderService:LoaderService) { }

  ngOnInit() {
    this.sideNavOpen = true;
    this.loaderService.startLoader();
    this.navBarService.getSidenav().subscribe((response) => {
      this.loaderService.endLoader();
      this.sidenav = response;
      console.log(response);
    });

    this.navBarService.isSideNavOpen.subscribe((flag) => {
      this.sideNavOpen = flag;
    });

    this.loaderService.loaderStatusChanged.subscribe((status:boolean) => {
      console.log('loader status is '+status);
      this.loaderStatus = status;
    });
  }

}
