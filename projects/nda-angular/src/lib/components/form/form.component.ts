import { OnChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';

import { ValidationMessageService } from '../../services/validation-message/validation-message.service';
import { FormUtil, ObjectUtil } from '../../util/util';
import { ControlsConfig, FormValueConfig } from '../components';

export abstract class FormComponent implements OnChanges {

  public form: FormGroup;
  private controlsConfig: ControlsConfig;

  protected abstract loadControlsConfig(): ControlsConfig;

  protected constructor(public builder: FormBuilder, public validation: ValidationMessageService) {
    this.createForm();
  }

  ngOnChanges() {
    this.resetForm();
  }

  createForm() {
    this.form = this.builder.group(this.getControlsConfig());
  }

  resetForm() {
    this.form.reset();
  }

  invalid(controlName: string) {
    const control = this.form.get(controlName);
    return control.invalid && (control.touched || control.dirty);
  }

  toggleDisable(val) {
    Object.values(this.form.controls).forEach((c: AbstractControl) => {
      if (val) {
        c.disable();
      } else {
        c.enable();
      }
    });
  }

  errorMsg(controlName: string) {
    return this.invalid(controlName) ? this.validation.getMessageFromErrors(this.getErrors(controlName)) : '';
  }

  reqErrorMsg(controlName: string) {
    return this.invalid(controlName) && this.getErrors(controlName).required ? this.validation.getRequiredMessage() : '';
  }

  getControlsConfig(): ControlsConfig {
    if (this.controlsConfig == null) {
      this.controlsConfig = this.loadControlsConfig();
    }
    return this.controlsConfig;
  }

  getInvalidErrors(controlName: string): ValidationErrors {
    return this.invalid(controlName) ? this.getErrors(controlName) : null;
  }

  getErrors(controlName: string) {
    return this.form.get(controlName).errors;
  }

  getFormValue(config?: FormValueConfig): any {
    let form = this.form.value;
    if (config) {
      if (config.dateValue) {
        form = FormUtil.collapseDateValues(form, config.dateValue);
      }
      if (config.booleanAsNumber) {
        form = FormUtil.booleanAsNumber(form);
      }
      if (config.flatten) {
        form = ObjectUtil.flatten(form);
      }
    }
    return form;
  }

  get formErrors() {
    return Object.keys(this.form.controls).map((k: string) => {
      return { [k]: this.getErrors(k) };
    });
  }

}
