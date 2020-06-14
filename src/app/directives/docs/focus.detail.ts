import { Detail } from '../../shared/detail/detail.model';
import { FocusWrapperComponent } from '../wrappers/focus-wrapper/focus-wrapper.component';

export const focusDetail: Detail = {
  id: 'focus',
  title: 'Focus Directive',
  component: FocusWrapperComponent,
  notes : {
    inputs: [
      {
        param: `focusOn: boolean`,
        desc: `Boolean to indicate if this control should be focused`
      }
    ],
    outputs: [],
    example: `<nda-input [focusOn]="checkbox.checked" formControlName="i"></nda-input> 

<nda-datepicker [focusOn]="doFocus(view)" formControlName="dp"></nda-datepicker>

<input [focusOn]="doFocus()" type="number" formControlName="num">

<select [focusOn]="selCheck.checked" formControlName="sel">...</select>
`,
    notes: [
      `Works with <code class="highlight">input</code>, <code class="highlight">textarea</code>, <code class="highlight">select</code> and all <code class="highlight">nda-</code> controls`,
    ]
  }
};