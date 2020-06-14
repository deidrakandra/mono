import { FormBuilder, Validators } from '@angular/forms';

import { FormComponent } from './form.component';
import { ControlsConfig } from '../components';
import { ValidationMessageService } from '../../services/validation-message/validation-message.service';

class ConcreteFormComponent extends FormComponent {
  constructor(public formBuilder: FormBuilder, public validation: ValidationMessageService) {
    super(formBuilder, validation);
  }

  protected loadControlsConfig(): ControlsConfig {
    return {
      input: ['', Validators.required]
    }
  }
}

describe('Abstract: FormComponent', () => {
  let form: ConcreteFormComponent;
  const testValue = 'test value';
  const testError = {
      "input": {
        "required": true
      }
  };


  beforeEach(() => {
    form = new ConcreteFormComponent(new FormBuilder(), new ValidationMessageService(null));
  });

  it('should create', () => {
    expect(form).toBeTruthy();
  });

  it('should have a form', () => {
    expect(form.form).toBeTruthy();
  });

  it('should have an input component', () => {
    expect(form.form.controls['input']).toBeTruthy();
  });

  it('should have valid input on load', () => {
    expect(form.invalid('input')).toBeFalsy();
  });

  it('should have invalid input after touch', () => {
    form.form.controls['input'].markAsTouched();
    expect(form.invalid('input')).toBeTruthy();
  });

  it('should have required error after touch', () => {
    form.form.controls['input'].markAsTouched();
    expect(form.formErrors).toContain(testError);
  });

  it('should have valid input after entering value', () => {
    form.form.controls['input'].setValue(testValue);
    expect(form.invalid('input')).toBeFalsy();
  });

  it('should reset the form', () => {
    form.form.controls['input'].setValue(testValue);
    expect(form.form.controls['input'].value).toBe(testValue);

    form.resetForm();
    expect(form.form.controls['input'].value).toBe(null);
  });
});
