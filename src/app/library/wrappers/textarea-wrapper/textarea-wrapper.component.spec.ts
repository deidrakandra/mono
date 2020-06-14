import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TextAreaComponent, ValidationMessageService, ConfigurationService } from '@nda/angular';

import { TextareaWrapperComponent } from './textarea-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MockConfigService,
  MockValidationService
} from '../../../../../projects/nda-angular/src/lib/test/test.fixture';

describe('TextareaWrapperComponent', () => {
  let component: TextareaWrapperComponent;
  let fixture: ComponentFixture<TextareaWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextareaWrapperComponent,
        TextAreaComponent
      ],
      imports: [ ReactiveFormsModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ValidationMessageService, useValue: new MockValidationService() },
        { provide: ConfigurationService, useValue: new MockConfigService() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
