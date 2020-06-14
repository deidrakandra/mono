import { AbstractControl, ControlValueAccessor } from '@angular/forms';
import { PropertyUtil } from '../../../util/property.util';

export abstract class BaseControlValueAccessor implements ControlValueAccessor {

  public _disabled: boolean;
  public _value: string = '';

  public onChanged: any = () => { };
  public onTouched: any = () => { };


  reset() {
    this._value = '';
  }

  onKeyup(val: string, key: string) {
    if (key !== 'Tab') {
      this.changed(val);
    }
  }

  onInputChange(val: string) {
    this.changed(val);
  }

  changed(inputValue: string) {
    this._value = inputValue;
    this.onTouched();
    this.onChanged(inputValue);
  }

  writeValue(value: string): void {
    if (value) {
      this._value = value;
    } else {
      this.reset();
    }
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  hasInitialValue(control: AbstractControl) {
    return control.pristine && PropertyUtil.notEmpty(control.value);
  }
}