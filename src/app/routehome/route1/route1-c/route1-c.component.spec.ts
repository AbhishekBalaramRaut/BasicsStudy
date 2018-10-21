import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route1CComponent } from './route1-c.component';

describe('Route1CComponent', () => {
  let component: Route1CComponent;
  let fixture: ComponentFixture<Route1CComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route1CComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route1CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
