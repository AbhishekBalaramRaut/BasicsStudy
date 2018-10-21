import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route1AComponent } from './route1-a.component';

describe('Route1AComponent', () => {
  let component: Route1AComponent;
  let fixture: ComponentFixture<Route1AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route1AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route1AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
