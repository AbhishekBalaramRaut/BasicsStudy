import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route2CComponent } from './route2-c.component';

describe('Route2CComponent', () => {
  let component: Route2CComponent;
  let fixture: ComponentFixture<Route2CComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route2CComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route2CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
