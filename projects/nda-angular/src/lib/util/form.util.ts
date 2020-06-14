import { DateValue } from '../components/controls/controls';

export class FormUtil {

  static collapseDateValues(form: object, type: DateValue): any {
    const converted = {};
    Object.keys(form).forEach((key) => {
      if (typeof form[key] === 'object' && form[key] !== null) {
        if (FormUtil.isDateValue(form[key])) {
          converted[key] = form[key][type];
        } else {
          Object.assign(converted, this.collapseDateValues(form[key], type));
        }
      } else {
        converted[key] = form[key];
      }
    });
    return converted;
  }

  static booleanAsNumber(form: object): any {
    const converted = {};
    Object.keys(form).forEach((key) => {
      if (typeof form[key] === 'object' && form[key] !== null) {
        Object.assign(converted, this.booleanAsNumber(form[key]));
      } else if (typeof form[key] === 'boolean') {
        converted[key] = form[key] ? 1 : 0;
      } else {
        converted[key] = form[key];
      }
    });
    return converted;
  }

  static isDateValue(obj): boolean {
    return obj != null && obj.timestamp != null && obj.date != null;
  }

}