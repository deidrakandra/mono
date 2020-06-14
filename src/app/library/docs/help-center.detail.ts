import { HelpCenterWrapperComponent } from '../wrappers/help-center-wrapper/help-center-wrapper.component';
import { Detail } from '../../shared/detail/detail.model';

export const helpCenterDetail: Detail = {
  id: 'help-center',
  title: 'Help Center',
  component: HelpCenterWrapperComponent,
  notes: {
    inputs: [],
    outputs: [],
    example: `<nda-help-center></nda-help-center>`,
    notes: [
      `Place anywhere outside of the main <code class="highlight">&lt;router-outlet></code> in <code class="highlight">app.component.html</code>`,
      `Help Center content is based on the final segment in the path of the url. The convention is <code class="highlight">help.x</code> where x is the final segment. For example, the key to the demo help center shown here is help.help-center`
    ]
  }
};