import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { ConfigurationService } from '../lookup/config/configuration.service';
import { TemplateUtil } from '../../util/template.util';

@Injectable()
export class ValidationMessageService {

  constructor(public config: ConfigurationService) { }

  getMessageFromErrors(errors: ValidationErrors): string {
    let message = '';
    if (errors) {
      if (errors.required) {
        message = this.getRequiredMessage();
      } else if (errors.mask) {
        message = this._parseMaskMessage(errors.mask);
      } else if (errors.dateExists || errors.validInitialValue) {
        message = this.getMessage('validation.date-exists');
      } else if (errors.dateFormat) {
        message = this._parseDateFormatMessage();
      } else if (errors.minlength) {
        message = this._parseMinLengthMessage(errors);
      } else if (errors.maxlength) {
        message = this._parseMaxLengthMessage(errors);
      } else if (errors.email) {
        message = this.getMessage('validation.email');
      } else if (errors.min) {
        message = this._parseMinValueMessage(errors);
      } else if (errors.max) {
        message = this._parseMaxValueMessage(errors);
      } else if (errors.dateBefore) {
        message = this._parseDateBeforeMessage(errors);
      } else {
        return this.getDefaultMessage();
      }
    }
    return message;
  }

  getMessage(key: string): string {
    return this.config.lookup(key);
  }

  getRequiredMessage(): string {
    return this.getMessage('validation.required');
  }

  getDefaultMessage(): string {
    return this.getMessage('validation.default');
  }

  resolveMessage(templateKey: string, params: any): string {
    const template = this.getMessage(templateKey);
    return TemplateUtil.resolve(template, params);
  }

  private _parseMaskMessage(error): string {
    return this.resolveMessage('validation.mask', error);
  }

  private _parseDateFormatMessage(): string {
    return this.resolveMessage('validation.date-format', { dateFormat : this.config.lookup('date.format')})
  }

  private _parseMinLengthMessage(error): string {
    return this.resolveMessage('validation.min-length', { min : error.minlength.requiredLength});
  }

  private _parseMaxLengthMessage(error): string {
    return this.resolveMessage('validation.max-length', { max : error.maxlength.requiredLength});
  }

  private _parseMinValueMessage(error): string {
    return this.resolveMessage('validation.min-value', error.min);
  }

  private _parseMaxValueMessage(error): string {
    return this.resolveMessage('validation.max-value', error.max);
  }

  private _parseDateBeforeMessage(error): string {
    return this.resolveMessage('validation.date-before', error.dateBefore);
  }
}
