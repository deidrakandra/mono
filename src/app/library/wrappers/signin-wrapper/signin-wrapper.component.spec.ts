import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent, InputComponent, ConfigurationService, ValidationMessageService } from '@nda/angular';

import { SigninWrapperComponent } from './signin-wrapper.component';
import {
  MockConfigService,
  MockValidationService
} from '../../../../../projects/nda-angular/src/lib/test/test.fixture';

describe('SigninWrapperComponent', () => {
  let component: SigninWrapperComponent;
  let fixture: ComponentFixture<SigninWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SigninWrapperComponent,
        SignInComponent,
        InputComponent
      ],
      imports: [ReactiveFormsModule],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ValidationMessageService, useValue: new MockValidationService() },
        { provide: ConfigurationService, useValue: new MockConfigService() }
      ]
      }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
