import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3CComponent } from './route3-c.component';

describe('Route3CComponent', () => {
  let component: Route3CComponent;
  let fixture: ComponentFixture<Route3CComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route3CComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route3CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
