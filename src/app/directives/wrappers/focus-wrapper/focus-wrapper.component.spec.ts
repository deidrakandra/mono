import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent, DatepickerComponent, TextAreaComponent, ValidationMessageService, ConfigurationService } from '@nda/angular';

import { FocusWrapperComponent } from './focus-wrapper.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  MockValidationService
} from '../../../../../projects/nda-angular/src/lib/test/test.fixture';
import Spy = jasmine.Spy;
import { DateHelperComponent } from '../../../../../projects/nda-angular/src/lib/components/controls/datepicker/date-helper/date-helper.component';

describe('FocusWrapperComponent', () => {
  let component: FocusWrapperComponent;
  let fixture: ComponentFixture<FocusWrapperComponent>;
  let getMessageSpy: Spy;

  beforeEach(async(() => {
    const format = 'MM/DD/YYYY';
    const configService = jasmine.createSpyObj('ConfigurationService', ['lookup']);
    getMessageSpy = configService.lookup.and.returnValue(format);

    TestBed.configureTestingModule({
      declarations: [
        FocusWrapperComponent,
        InputComponent,
        TextAreaComponent,
        DatepickerComponent,
        DateHelperComponent
      ],
      imports: [ ReactiveFormsModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ValidationMessageService, useValue: new MockValidationService() },
        { provide: ConfigurationService, useValue: configService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
