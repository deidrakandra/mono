import { ScrollWrapperComponent } from '../wrappers/scroll-wrapper/scroll-wrapper.component';
import { Detail } from '../../shared/detail/detail.model';

export const scrollDetail: Detail = {
  id: 'scroll',
  title: 'Scroll',
  component: ScrollWrapperComponent,
  notes: {
    inputs: [
      {
        param: `fixed: boolean`,
        desc: `Optional. Default is <code class="highlight">false</code>. Fixes button at lower right corner of screen.`
      },
      {
        param: `scrollBottom: boolean`,
        desc: `Optional. Default is <code class="highlight">false</code>. Sets scroll behavior to bottom and rotates icon half a turn.`
      }
    ],
    outputs: [],
    example: `<nda-scroll [scrollBottom]="true"></nda-scroll>
  
<nda-scroll></nda-scroll>

<nda-scroll [fixed]="true"></nda-scroll>`,
    notes: [
      `Originally meant to be a "Scroll to Top" button. Added additional options to allow scroll to bottom and button positioning. `
    ]
  }
};