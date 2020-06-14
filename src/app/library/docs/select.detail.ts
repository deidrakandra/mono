import { Detail } from '../../shared/detail/detail.model';
import { SelectWrapperComponent } from '../wrappers/select-wrapper/select-wrapper.component';

export const selectDetail: Detail = {
  id: 'select',
  title: 'Select',
  component: SelectWrapperComponent,
  notes: {
    inputs: [{
      param: `options: Option[]`,
      desc: `Array of <code class="highlight">Option</code> objects. See note below.`
    }, {
      param: `blank: boolean`,
      desc: `Optional. Inserts an empty <code class="highlight">Option</code> at the beginning of the options list`
    }, {
      param: `errorMsg: string`,
      desc: `Optional. Indicates invalid control. Triggers red border and displays message below component`
    }, {
      param: `label: string`,
      desc: `Optional. Label for input control. Can be a string or cms content key.`
    }, {
      param: `isRequired: boolean`,
      desc: `Optional. Adds red required asterisk to control label`
    }],
    outputs: [],
    example: `<nda-select [blank]="true" [options]="options" label="Select One" formControlName="select"></nda-select>

<nda-select [options]="options" label="Select Two" isRequired="true" [errorMsg]="reqErrorMsg('selectTwo')" formControlName="selectTwo"></nda-select>`,
    notes: [
      `<code class="highlight">Option</code> object describes the value and label for the select to display. 
<pre>export interface Option { 
  label: string; 
  value: string | number; 
}</pre>`,
      `See <a href="/patterns/forms">Forms Pattern</a> for more examples`,
      `<h5 class="uppercase">Custom Validations</h5>
        <li>None</li>`
    ]
  }
};