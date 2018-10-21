import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route2AComponent } from './route2-a.component';

describe('Route2AComponent', () => {
  let component: Route2AComponent;
  let fixture: ComponentFixture<Route2AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route2AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route2AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
