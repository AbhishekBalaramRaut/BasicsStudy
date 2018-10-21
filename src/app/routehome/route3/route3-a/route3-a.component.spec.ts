import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3AComponent } from './route3-a.component';

describe('Route3AComponent', () => {
  let component: Route3AComponent;
  let fixture: ComponentFixture<Route3AComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route3AComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route3AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
