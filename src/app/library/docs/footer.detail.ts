import { FooterWrapperComponent } from '../wrappers/footer-wrapper/footer-wrapper.component';
import { Detail } from '../../shared/detail/detail.model';

export const footerDetail: Detail = {
  id: 'footer',
  title: 'Footer',
  component: FooterWrapperComponent,
  notes: {
    inputs: [],
    outputs: [],
    example: `<nda-footer></nda-footer>`,
    notes: [
      `Must be last tag in <code class="highlight">app.component.html</code>`,
    ]
  }
};