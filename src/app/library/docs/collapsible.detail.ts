import { CollapsibleWrapperComponent } from '../wrappers/collapsible-wrapper/collapsible-wrapper.component';
import { Detail } from '../../shared/detail/detail.model';

export const collapsibleDetail: Detail = {
  id: 'collapsible',
  title: 'Collapsible',
  component: CollapsibleWrapperComponent,
  notes: {
    inputs: [
      {
        param: `heading: string`,
        desc: `Text to be displayed as header. Clicking on the header activates the expansion.`
      }
    ],
    outputs: [],
    example: `<nda-collapsible heading="Click Me">
    <div>Surprise</div>
</nda-collapsible>`,
    notes: [
      `Uses <code class="highlight">&lt;ng-content></code> so anything between tags will be displayed as hidden content`
    ]
  }
};