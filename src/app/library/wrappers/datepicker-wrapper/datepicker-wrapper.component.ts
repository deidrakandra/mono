import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormComponent, ControlsConfig, ValidationMessageService } from '@nda/angular';

@Component({
  selector: 'sg-datepicker-wrapper',
  templateUrl: './datepicker-wrapper.component.html'
})
export class DatepickerWrapperComponent extends FormComponent {

  constructor(public builder: FormBuilder, public validation: ValidationMessageService) {
    super(builder, validation);
  }

  protected loadControlsConfig(): ControlsConfig {
    return {
      datepicker: [''],
      // datepicker: [null]
      datepickerString: ['12/21/2021'],
      // datepickerInvalid: ['21/12/2021'],
      datepickerTimestamp: [1261375200000]
      // datepicker: ['1261375200000']
    };
  }

  onSubmit() {
    this.resetForm();
  }

}
