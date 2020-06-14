import { SpinnerWrapperComponent } from '../wrappers/spinner-wrapper/spinner-wrapper.component';
import { Detail } from '../../shared/detail/detail.model';

export const spinnerDetail: Detail = {
  id: 'spinner',
  title: 'Spinner',
  component: SpinnerWrapperComponent,
  notes: {
    inputs: [
      {
        param: `type: SpinnerType`,
        desc: `One of two types: <code>small</code> or <code>large</code> represented by the <code>SpinnerType</code> enum`,
      },
      {
        param: `show: boolean`,
        desc: `Controls visibility of spinner`
      }
    ],
    outputs: [],
    example: `<nda-spinner [type]="large" [show]="spin"></nda-spinner>`,
    notes: [
      'There are only two options for the spinner as of now as seen above',
      'Valid types are <code class="highlight">SpinnerType.SMALL</code> or <code class="highlight">SpinnerType.LARGE</code>',
      'Spinner is currently based off a third party widget: <a href="https://www.npmjs.com/package/ngx-spinner">docs</a>'
    ]
  }
};