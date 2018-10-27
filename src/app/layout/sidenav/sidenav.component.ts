import { Component, OnInit, Input } from '@angular/core';
import { NavBarService } from '../../shared/services/navBar.service';
import { Isidenav } from '../../shared/interfaces/sidenav';
import { LoaderService } from '../../shared/services/loader.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations:[
    trigger('openClose1', [
    state('open', style({
      transform: 'rotate(-3deg)' 
    })),
    state('closed', style({
      transform: 'rotate(0)' 
    })),
    transition('open => closed', [
      animate('4s')
    ]),
    transition('closed => open', [
      animate('4s')
    ]),
  ])
  ]
})
export class SidenavComponent implements OnInit {
  @Input('sideNavOpen')
  sideNavOpen:boolean;
  isCollapsed:boolean;
  @Input('sidenav')
  sidenav:Isidenav[];

  constructor(private navBarService: NavBarService,
              private loaderService: LoaderService) { 

            }

  ngOnInit() {

  }

  toggleSideNav() {
    this.sideNavOpen = !this.sideNavOpen;
    this.navBarService.isSideNavOpen.next(this.sideNavOpen);
  }
}
