import { ErrorWrapperComponent } from '../wrappers/error-wrapper/error-wrapper.component';
import { Detail } from '../../shared/detail/detail.model';

export const exportDetail: Detail = {
  id: 'error',
  title: 'Error',
  component: ErrorWrapperComponent,
  notes: {
    inputs: [],
    outputs: [],
    example: `<nda-error></nda-error>`,
    notes: [
      'Top and bottom lines are sourced from the cms',
      `Service based component. Call <code class="highlight">displayErrorMessage(msg: string)</code> service method to display error message.`,
      `<div class="italic small-font">Example</div><pre class="m-left-sm"><code>constructor(private error: ErrorMessageService) { }

showError(msg: string) {
    this.error.displayErrorMessage(msg);
}
</code></pre>`
    ]
  }
};