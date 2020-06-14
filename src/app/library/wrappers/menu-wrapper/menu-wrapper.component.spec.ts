import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent, MenuItem } from '@nda/angular';

import { MenuWrapperComponent } from './menu-wrapper.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MenuWrapperComponent', () => {
  let component: MenuWrapperComponent;
  let fixture: ComponentFixture<MenuWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuWrapperComponent, MenuComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
