import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3BComponent } from './route3-b.component';

describe('Route3BComponent', () => {
  let component: Route3BComponent;
  let fixture: ComponentFixture<Route3BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Route3BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route3BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
