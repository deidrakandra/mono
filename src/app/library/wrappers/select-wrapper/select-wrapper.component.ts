import { Component } from '@angular/core';

import { ControlsConfig, FormComponent, ValidationMessageService, Option } from '@nda/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './select-wrapper.component.html'
})
export class SelectWrapperComponent extends FormComponent {

  readonly options: Option[] = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three has a really long option label for testing purposes' },
    { value: 'four', label: 'Four' },
    { value: 'five', label: 'Five' }
  ];

  constructor(public builder: FormBuilder, public validation: ValidationMessageService) {
    super(builder, validation);
  }

  protected loadControlsConfig(): ControlsConfig {
    return {
      select: ['one'],
      selectTwo: ['', Validators.required]
    };
  }

  onSubmit() {
    this.form.reset({
      select: 'two',
      selectTwo: ''
    });
  }

}
