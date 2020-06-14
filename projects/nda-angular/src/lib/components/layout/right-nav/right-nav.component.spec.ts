import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightNavComponent } from './right-nav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Component: RightNav', () => {
  let component: RightNavComponent;
  let fixture: ComponentFixture<RightNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightNavComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
