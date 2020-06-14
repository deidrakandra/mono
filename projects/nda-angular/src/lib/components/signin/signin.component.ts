import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { FormComponent } from '../form/form.component';
import { ValidationMessageService } from '../../services/validation-message/validation-message.service';
import { ControlsConfig } from '../components';


@Component({
  selector: 'nda-signin',
  templateUrl: './signin.component.html'
})
export class SignInComponent extends FormComponent {

  @Output() authenticate = new EventEmitter<any>();

  constructor(public formBuilder: FormBuilder, public validation: ValidationMessageService) {
    super(formBuilder, validation);
  }

  protected loadControlsConfig(): ControlsConfig {
    return {
      username: [null, Validators.required],
      password: [null, Validators.required]
    };
  }

  onSubmit() {
    if (this.form.valid) {
      this.authenticate.emit(this.form.value);
    }
  }
}