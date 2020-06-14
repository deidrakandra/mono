import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { isNumeric } from 'rxjs/internal-compatibility';

import { DateHelperComponent } from './date-helper/date-helper.component';
import { BaseControlValueAccessor } from '../cva/BaseControlValueAccessor';
import { ConfigurationService } from '../../../services/lookup/config/configuration.service';
import { Date } from './date-helper/date-helper.model';

import { Moment } from 'moment';
import * as m from "moment";
const moment = m;

@Component({
  selector: 'nda-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatepickerComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DatepickerComponent),
    multi: true
  }]
})
export class DatepickerComponent extends BaseControlValueAccessor implements Validator {

  @ViewChild('helper', { static: true }) helper: DateHelperComponent;

  @Input() label: string;
  @Input() isRequired: boolean;
  @Input() errorMsg: string;

  private pendingChange: boolean;

  buttonHasFocus: boolean;

  readonly format: string;
  readonly mask: string;

  readonly DATE_KEY: string = 'date.format';
  readonly defaultFormat: string = 'MM/DD/YYYY';


  constructor(public config: ConfigurationService) {
    super();
    const lookupFormat = config.lookup(this.DATE_KEY);
    this.format = lookupFormat === this.DATE_KEY ? this.defaultFormat : lookupFormat.toUpperCase();
    this.mask = this.format.replace(/[a-zA-Z]/g, '0');
  }

  onDateFromHelper(helperDate: Date) {
    this.toggleHelper();

    const date = moment().set(helperDate);
    this.changed(date.format(this.format));
  }

  reset() {
    this._value = '';
    this.helper.clearAll();
  }

  toggleHelper() {
    this.helper.toggle();
  }

  changed(inputValue: string) {
    this._value = inputValue;
    const newValue = {
      timestamp: moment(inputValue, this.format).valueOf(),
      date: inputValue
    };
    this.onTouched();
    this.onChanged(newValue);
    this.helper.updateFromInput(newValue.timestamp);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let errors = {};
    if (control.dirty || this.hasInitialValue(control)) {
      const timestamp = this.getTimestamp(control.value);
      const date: string = this.getDate(control.value);

      errors = this.validateRequired(timestamp, date, errors);
      errors = this.validateDateExists(timestamp, date, errors);
      errors = this.validateDateFormat(date, errors);
    }
    return Object.keys(errors).length > 0 ? errors : null;
  }

  private getTimestamp(value: any): number | null {
    return (typeof value === 'number') ? value
      : (typeof value === 'string' && isNumeric(value)) ? +value
      : value.timestamp
  }

  private getDate(value: any): string | null {
    return (typeof value === 'string') ? value
      : value.date;
  }

  private validateRequired(timestamp: number, date: string, errors: any): ValidationErrors | null {
    if (this.isRequired && !timestamp && !date) {
      return {
        ...errors,
        required: true
      };
    }
    return errors;
  }

  private validateDateExists(timestamp: number, date: string, errors: any): ValidationErrors | null {
    if (!timestamp && date && !moment(timestamp).isValid()) {
      return {
        ...errors,
        dateExists: { valid: false }
      }
    }
    return errors;
  }

  private validateDateFormat(date: string, errors: any): ValidationErrors | null {
    if (date && !moment(date, this.format, true).isValid()) {
      return {
        ...errors,
        dateFormat: { valid: false },
      }
    }
    return errors;
  }

  writeValue(value: string | number): void {
    if (value) {
      const incoming: Moment = this.getInitialValue(value);
      this._value = incoming.isValid() ? incoming.format(this.format) : value.toString();
      this.pendingChange = true;
    } else {
      this.reset();
    }
  }

  private getInitialValue(initialValue: string | number): Moment {
    return typeof initialValue === 'number' ? moment(initialValue)
      : typeof initialValue === 'string' && isNumeric(initialValue) ? moment(+initialValue)
      : moment(initialValue, this.format);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
    if (this.pendingChange) {
      this.changed(this._value);
    }
  }

  buttonFocused(focusIn: boolean): void {
    this.buttonHasFocus = focusIn;
  }
}