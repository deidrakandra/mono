import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent, DatepickerComponent, CollapsibleComponent, TextAreaComponent, ValidationMessageService, ConfigurationService, SelectComponent } from '@nda/angular';
import { DateHelperComponent } from '../../../../../projects/nda-angular/src/lib/components/controls/datepicker/date-helper/date-helper.component';

import { FormsWrapperComponent } from './forms-wrapper.component';
import { MockValidationService } from '../../../../../projects/nda-angular/src/lib/test/test.fixture';
import Spy = jasmine.Spy;

describe('FormsWrapperComponent', () => {
  let component: FormsWrapperComponent;
  let fixture: ComponentFixture<FormsWrapperComponent>;
  let format: string;
  let getMessageSpy: Spy;

  beforeEach(async(() => {
    format = 'MM/DD/YYYY';
    const configService = jasmine.createSpyObj('ConfigurationService', ['lookup']);
    getMessageSpy = configService.lookup.and.returnValue(format);

    TestBed.configureTestingModule({
      declarations: [
        FormsWrapperComponent,
        DatepickerComponent,
        DateHelperComponent,
        CollapsibleComponent,
        InputComponent,
        TextAreaComponent,
        SelectComponent
      ],
      imports: [ ReactiveFormsModule, NoopAnimationsModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ValidationMessageService, useValue: new MockValidationService() },
        { provide: ConfigurationService, useValue: configService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
