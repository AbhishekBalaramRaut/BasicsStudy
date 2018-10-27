import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-child-nav',
  templateUrl: './child-nav.component.html',
  styleUrls: ['./child-nav.component.css'],
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
export class ChildNavComponent implements OnInit {
  @Input()
  navMenu:any;
  @Input()
  parentId:any;
  @Input()
  sideNavOpen:boolean;

  constructor() { }

  ngOnInit() {
  }

}
