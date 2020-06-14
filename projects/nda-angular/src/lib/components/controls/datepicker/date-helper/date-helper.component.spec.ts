import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DateHelperComponent } from './date-helper.component';


@Component({
  template: `<nda-date-helper #helper (selectedDate)="onDateFromHelper($event)" [format]="format"></nda-date-helper>`
})
class TestHostComponent {
  @ViewChild('helper', { static: false }) helper: DateHelperComponent;

  public format;

  onDateFromHelper(val: object) { }
  toggleHelper() { this.helper.toggle() }
}

describe('Component: DateHelper', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  const format = 'MM/DD/YYY';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateHelperComponent, TestHostComponent ],
      imports: [NoopAnimationsModule],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.format = format;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display on boolean', () => {
    component.toggleHelper();
    fixture.detectChanges();

    const helperEl: HTMLElement = fixture.debugElement.query(By.css('.date-helper')).nativeElement;
    expect(helperEl).toBeTruthy();
  });

  it('should close on toggle', () => {
    component.helper.display = true;
    component.toggleHelper();
    fixture.detectChanges();

    const closedHelperEl = fixture.debugElement.query(By.css('.date-helper'));
    expect(closedHelperEl).toBeFalsy();
  });


});
