import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route2BComponent } from './route2-b.component';

describe('Route2BComponent', () => {
  let component: Route2BComponent;
  let fixture: ComponentFixture<Route2BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route2BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route2BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
