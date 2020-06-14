import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SignInComponent } from './signin.component';
import { InputComponent } from '../components';
import { ValidationMessageService } from '../../services/services';
import { MockValidationService } from '../../test/test.fixture';

describe('Component: SignIn', () => {

  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let requestForm: FormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent, InputComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ValidationMessageService, useValue: new MockValidationService() }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    requestForm = component.form;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('validity', () => {

    it('should be invalid for empty form', () => {
      expect(requestForm.valid).toBeFalsy();
    });

    it('should be valid when required inputs have values', () => {
      const username = requestForm.get('username');
      const password = requestForm.get('password');

      username.setValue('username');
      password.setValue('password');

      expect(username.valid).toBeTruthy();
      expect(password.valid).toBeTruthy();
    });

    it('should not be invalid inputs when page loads', () => {
      expect(component.invalid('username')).toBeFalsy();
      expect(component.invalid('password')).toBeFalsy();
    });

    it('should be invalid if one input is invalid', () => {
      requestForm.get('username').setValue('username');
      expect(component.invalid('username')).toBeFalsy();
      expect(component.invalid('password')).toBeFalsy(); // hasn't been touched

      requestForm.get('password').markAsTouched();
      expect(component.invalid('password')).toBeTruthy();
    });

    it('should have required errors', () => {
      const usernameErrors = requestForm.get('username').errors;
      const passwordErrors = requestForm.get('password').errors;

      expect(usernameErrors['required']).toBeTruthy();
      expect(passwordErrors['required']).toBeTruthy();
    });

  });

  describe('submit', () => {
  
    it('should not submit when invalid', () => {
      let output = false;
      component.authenticate.subscribe((data) => {
        output = true;
      });

      component.onSubmit();

      expect(output).toBeFalsy();
    });

    it('should submit valid inputs', () => {
      let output = {};
      const usernameValue = 'username';
      const passwordValue = 'password';
      requestForm.get('username').setValue(usernameValue);
      requestForm.get('password').setValue(passwordValue);

      component.authenticate.subscribe((data) => {
        output = data;
      });

      component.onSubmit();

      expect(output).toBeTruthy();
      expect(output['username']).toBe(usernameValue);
      expect(output['password']).toBe(passwordValue);
    });

  });
});