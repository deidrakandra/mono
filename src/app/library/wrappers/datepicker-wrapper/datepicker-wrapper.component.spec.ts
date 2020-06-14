import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsibleComponent, DatepickerComponent, ValidationMessageService, ConfigurationService } from '@nda/angular';
import { DateHelperComponent } from '../../../../../projects/nda-angular/src/lib/components/controls/datepicker/date-helper/date-helper.component';

import { DatepickerWrapperComponent } from './datepicker-wrapper.component';
import { MockValidationService } from '../../../../../projects/nda-angular/src/lib/test/test.fixture';
import Spy = jasmine.Spy;

describe('DatepickerWrapperComponent', () => {
  let component: DatepickerWrapperComponent;
  let fixture: ComponentFixture<DatepickerWrapperComponent>;
  let format: string;
  let getMessageSpy: Spy;

  beforeEach(async(() => {
    format = 'MM/DD/YYYY';
    const configService = jasmine.createSpyObj('ConfigurationService', ['lookup']);
    getMessageSpy = configService.lookup.and.returnValue(format);

    TestBed.configureTestingModule({
      declarations: [
        DatepickerWrapperComponent,
        DatepickerComponent,
        DateHelperComponent,
        CollapsibleComponent
      ],
      imports: [ ReactiveFormsModule, NoopAnimationsModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ValidationMessageService, useValue: new MockValidationService() },
        { provide: ConfigurationService, useValue: configService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
