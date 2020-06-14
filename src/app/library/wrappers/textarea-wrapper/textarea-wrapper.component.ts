import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormComponent, ControlsConfig, ValidationMessageService } from '@nda/angular';

@Component({
  selector: 'sg-textarea-wrapper',
  templateUrl: './textarea-wrapper.component.html'
})
export class TextareaWrapperComponent extends FormComponent {

  constructor(public builder: FormBuilder, public validation: ValidationMessageService) {
    super(builder, validation);
  }

  onSubmit() {
    this.resetForm();
  }

  protected loadControlsConfig(): ControlsConfig {
    return {
      textareaReq: ['', Validators.required],
      textareaRows: ['', Validators.required],
      textareaNoLabel: []
    };
  }
}
