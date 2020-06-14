import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent, ValidationMessageService, ConfigurationService } from '@nda/angular';

import { InputWrapperComponent } from './input-wrapper.component';
import {
  MockConfigService,
  MockValidationService
} from '../../../../../projects/nda-angular/src/lib/test/test.fixture';

describe('InputWrapperComponent', () => {
  let component: InputWrapperComponent;
  let fixture: ComponentFixture<InputWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputWrapperComponent,
        InputComponent,
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
    fixture = TestBed.createComponent(InputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
