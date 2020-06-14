import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { BaseControlValueAccessor } from '../cva/BaseControlValueAccessor';
import { Option } from '../../../util/util';

@Component({
  selector: 'nda-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent extends BaseControlValueAccessor {

  @Input() label: string;
  @Input() isRequired: boolean;
  @Input() errorMsg: string;
  @Input() blank: boolean;

  @Input() options: Option[];
}
