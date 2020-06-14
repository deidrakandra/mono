import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { MenuComponent } from "@nda/angular";

import { StylesComponent } from './styles.component';

describe('StylesComponent', () => {
  let component: StylesComponent;
  let fixture: ComponentFixture<StylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StylesComponent,
        MenuComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
