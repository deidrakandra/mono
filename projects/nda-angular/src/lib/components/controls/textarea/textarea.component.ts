import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { BaseControlValueAccessor } from '../cva/BaseControlValueAccessor';

@Component({
  selector: 'nda-textarea',
  templateUrl: './textarea.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextAreaComponent),
    multi: true
  }]
})
export class TextAreaComponent extends BaseControlValueAccessor {

  @Input() label: string;
  @Input() isRequired: boolean;
  @Input() errorMsg: string;
  @Input() rows: number;
  @Input() placeholder: string = '';

  get rowCount(): number {
    return this.rows ? this.rows : 5;
  }

}
