import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

import { PropertyUtil } from '../util/util';

export interface Conditional {
  conditional: string;
  value: any;
}

export class NdaValidators {

  static requiredIf(conditional: string, required: string): ValidatorFn {
    return (group: FormGroup): ValidationErrors | null => {
      const cond = group.get(conditional);
      const req = group.get(required);

      const value = typeof cond.value === 'string' ? cond.value === 'true' : cond.value;
      const invalid = value && PropertyUtil.empty(req.value);

      const reqError = invalid ? { 'required' : true } : null;
      req.setErrors(reqError);

      const name = `requiredIf ${conditional}`;
      return invalid ? { [name]: { 'cond': conditional, 'req': required } } : null;
    }
  }

  static requiredIfValue(conditional: string, value: any, required: string): ValidatorFn {
    return (group: FormGroup): ValidationErrors | null => {
      const cond = group.get(conditional);
      const req = group.get(required);

      const isRequired = cond.value === value;
      const invalid = isRequired && PropertyUtil.empty(req.value);


      const reqError = invalid ? { 'required': true } : null;
      req.setErrors(reqError);

      const name = `requiredIf ${conditional} is ${value}`;
      return invalid ? { [name]: { 'cond': conditional, 'req': required } } : null;
    }
  }

  static requiredIfConditionals(conditionals: Conditional[], required: string): ValidatorFn {
    return (group: FormGroup): ValidationErrors | null => {
      const req = group.get(required);
      let allMet = true;

      conditionals.forEach((c: Conditional) => {
        const cond = group.get(c.conditional);
        if (cond.value !== c.value) {
          allMet = false;
        }
      });

      const invalid = allMet && PropertyUtil.empty(req.value);

      const reqError = invalid ? { 'required': true } : null;
      req.setErrors(reqError);

      const name = `requiredIfConditionals`;
      return invalid ? { [name]: { 'req': required } } : null;
    }
  }

  static dateBefore(dateBefore: string, dateAfter: string, context: {[p: string]: any}): ValidatorFn {
    return (group: FormGroup): ValidationErrors | null => {
      const before = group.get(dateBefore);
      const after = group.get(dateAfter);

      const invalid = PropertyUtil.notEmpty(before.value) && PropertyUtil.notEmpty(after.value) && before.value.timestamp > after.value.timestamp;
      const error = invalid ? {
        'dateBefore' : {
          'dateBefore': context.dateBefore,
          'dateAfter': context.dateAfter
        },
      } : null;

      before.setErrors(error);
      return error;
    }
  }

}