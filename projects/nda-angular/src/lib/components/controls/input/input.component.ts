import { Component, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { BaseControlValueAccessor } from '../cva/BaseControlValueAccessor';

@Component({
  selector: 'nda-input',
  templateUrl: './input.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent extends BaseControlValueAccessor implements Validator {

  @Input() type: string;
  @Input() label: string;
  @Input() inputMask: string;
  @Input() placeholder: string = '';
  @Input() isRequired: boolean;
  @Input() errorMsg: string;

  get inputType() {
    return this.type ? this.type : 'text';
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let errors = {};
    if (control.dirty || this.hasInitialValue(control)) {
      if (this.inputMask && !this.matchesMask(control.value) ) {
        errors = {
          ...errors,
          mask: {
            valid: false,
            inputMask: this.inputMask
          }
        }
      }
    }
    return Object.keys(errors).length > 0 ? errors : null;
  }

  private matchesMask(value: string): boolean {
    return value.length === 0 || value.length === this.inputMask.length;
  }
}
