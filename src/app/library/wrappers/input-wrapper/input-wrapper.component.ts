import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormComponent, ControlsConfig, ValidationMessageService } from '@nda/angular';

@Component({
  templateUrl: './input-wrapper.component.html'
})
export class InputWrapperComponent extends FormComponent {

  constructor(
    public builder: FormBuilder,
    public validation: ValidationMessageService
  ) {
    super(builder, validation);
  }

  onSubmit() {
    this.resetForm();
  }

  protected loadControlsConfig(): ControlsConfig {
    return {
      input: ['', Validators.required],
      inputPlaceholder: ['', Validators.required],
      inputMask: [],
      inputNoVal: [],
      inputNumber: [],
      inputPassword: []
    }
  }
}
