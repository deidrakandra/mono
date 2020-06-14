import { Detail } from '../../shared/detail/detail.model';
import { DatepickerWrapperComponent } from '../wrappers/datepicker-wrapper/datepicker-wrapper.component';

export const datePickerDetail: Detail = {
  id: 'datepicker',
  title: 'Datepicker',
  component: DatepickerWrapperComponent,
  notes: {
    inputs: [{
      param: `errorMsg: string`,
      desc: `Optional. Indicates invalid control. Triggers red border and displays message below component`
    }, {
      param: `label: string`,
      desc: `Optional. Label for input control. Can be a string or cms content key.`
    }, {
      param: `isRequired: boolean`,
      desc: `Optional. Adds red required asterisk to control label. Required validation is performed.`
    }],
    outputs: [],
    example: `<nda-datepicker [errorMsg]="errorMsg('datepicker')" label="Start Date" isRequired="true" formControlName="datepicker"></nda-datepicker> `,
    notes: [
      `Returns date value in both string and timestamp in the form <pre>{
  "timestamp": 1837141200000,
  "date": "03/20/2028"
}</pre>`,
      `Performs required validation as part of the custom validation when <code class="highlight">isRequired</code>. No need to set the required validator in <code class="highlight">ControlsConfig</code>`,
      `<h5 class="uppercase">Custom Validations</h5>
        <li class="p-bottom-sm"><code class="highlight">dateExists</code> Verifies the input is a valid date that actually exists</li>
        <li><code class="highlight">validInput</code> Verifies the input is in the correct format of MM/DD/YYYY</li>`
    ]
  }
};