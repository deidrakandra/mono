import { Detail } from '../../shared/detail/detail.model';
import { InputWrapperComponent } from '../wrappers/input-wrapper/input-wrapper.component';

export const inputDetail: Detail = {
  id: 'input',
  title: 'Input',
  component: InputWrapperComponent,
  notes: {
    inputs: [{
      param: `errorMsg: string`,
      desc: `Optional. Indicates invalid control. Triggers red border and displays message below component`
    }, {
      param: `inputMask: string`,
      desc: `Optional. Mask for text input`
    }, {
      param: `label: string`,
      desc: `Optional. Label for input control. Can be a string or cms content key.`
    }, {
      param: `placeholder: string`,
      desc: `Optional. Adds placeholder text to the control`
    }, {
      param: `isRequired: boolean`,
      desc: `Optional. Adds red required asterisk to control label`
    }, {
      param: `type: string`,
      desc: `Optional. Default is <code class="highlight">type="text"</code>, also supports <code class="highlight">type="number | password"</code>`
    }],
    outputs: [],
    example: `<nda-input label="Text Input" isRequired="true" [errorMsg]="reqErrorMsg('input')" formControlName="input"></nda-input>

<nda-input label="Text Input w/ placeholder" placeholder="Text Input Placeholder" isRequired="true" [errorMsg]="reqErrorMsg('inputPlaceholder')" formControlName="inputPlaceholder"></nda-input>

<nda-input label="Text Input w/ mask & placeholder" inputMask="(000) 000-0000" placeholder="(999) 999-9999" [errorMsg]="errorMsg" formControlName="inputMask"></nda-input>

<nda-input label="Text Input (no validation)" formControlName="inputNoVal"></nda-input>

<nda-input type="number" label="Number Input (no validation)" formControlName="inputNumber"></nda-input>

<nda-input type="password" formControlName="passwordNumber"></nda-input>`,
    notes: [
      `See <a href="/patterns/forms">Forms Pattern</a> for more examples`,
      `<h5 class="uppercase">Custom Validations</h5>
        <li><code class="highlight">mask</code> If mask has been set, verifies the input conforms to the mask</li>`
    ]
  }
};