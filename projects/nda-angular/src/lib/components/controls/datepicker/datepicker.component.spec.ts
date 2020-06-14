import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DatepickerComponent } from './datepicker.component';
import { DateHelperComponent } from './date-helper/date-helper.component';
import { ConfigurationService } from '../../../services/services';

import Spy = jasmine.Spy;

@Component({
  template: `
      <nda-datepicker [label]="label" [errorMsg]="errorMsg" [isRequired]="required"></nda-datepicker>`
})
class TestHostComponent {
  label: string;
  errorMsg: string;
  required: boolean;
}

describe('Component: Datepicker', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let format: string;
  let getMessageSpy: Spy;

  beforeEach(async(() => {
    format = 'MM/DD/YYYY';
    const configService = jasmine.createSpyObj('ConfigurationService', ['lookup']);
    getMessageSpy = configService.lookup.and.returnValue(format);

    TestBed.configureTestingModule({
      declarations: [
        DatepickerComponent,
        DateHelperComponent,
        TestHostComponent,
      ],
      imports: [NoopAnimationsModule],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ConfigurationService, useValue: configService }
      ]
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have error state by default', () => {
    const inputEl: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
    const buttonEl: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    const msgEl = fixture.debugElement.query(By.css('.validation-msg'));

    expect(msgEl).toBeFalsy();
    expect(inputEl.classList).not.toContain('invalid');
    expect(buttonEl.classList).not.toContain('invalid');
  });

  it('should show helper when button clicked', () => {
    const buttonEl: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;
    buttonEl.click();
    fixture.detectChanges();

    const helperEl: HTMLElement = fixture.debugElement.query(By.css('.date-helper')).nativeElement;
    expect(helperEl).toBeTruthy();
  });


  it('should have error state with error message', () => {
    component.errorMsg = 'Invalid';
    fixture.detectChanges();

    const inputEl: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
    const buttonEl: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(inputEl.classList).toContain('invalid');
    expect(buttonEl.classList).toContain('invalid');
  });

});
