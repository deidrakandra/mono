import { Detail } from '../../shared/detail/detail.model';
import { TextareaWrapperComponent } from '../wrappers/textarea-wrapper/textarea-wrapper.component';

export const textareaDetail: Detail = {
  id: 'textarea',
  title: 'Textarea',
  component: TextareaWrapperComponent,
  notes: {
    inputs: [{
      param: `errorMsg: string`,
      desc: `Optional. Indicates invalid control. Triggers red border and displays message below component`
    }, {
      param: `label: string`,
      desc: `Optional. Label for input control. Can be a string or cms content key.`
    }, {
      param: `placeholder: string`,
      desc: `Optional. Adds placeholder text to the control`
    }, {
      param: `rows: string | number`,
      desc: `Optional. Specify number of visible lines. Default is 5 rows.`
    }, {
      param: `isRequired: boolean`,
      desc: `Optional. Adds red required asterisk to control label`
    }],
    outputs: [],
    example: `<nda-textarea label="Text Area" isRequired="true" [errorMsg]="reqErrorMsg('textareaReq')" formControlName="textareaReq"></nda-textarea>

<nda-textarea label="Text Area" [rows]="2" isRequired="true" [errorMsg]="reqErrorMsg('textareaRows')" formControlName="textareaRows"></nda-textarea>

<nda-textarea [rows]="8" placeholder="Large unvalidated textarea" formControlName="textareaNoLabel"></nda-textarea>`,
    notes: [
      `See <a href="/patterns/forms">Forms Pattern</a> for more examples`,
      `<h5 class="uppercase">Custom Validations</h5>
        <li>None</li>`
    ]
  }
};