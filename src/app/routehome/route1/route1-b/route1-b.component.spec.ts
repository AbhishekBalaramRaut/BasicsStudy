import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route1BComponent } from './route1-b.component';

describe('Route1BComponent', () => {
  let component: Route1BComponent;
  let fixture: ComponentFixture<Route1BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route1BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
