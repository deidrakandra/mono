import { Detail } from '../../shared/detail/detail.model';
import { ContentWrapperComponent } from '../wrappers/content-wrapper/content-wrapper.component';

export const contentDetail: Detail = {
  id: 'content',
  title: 'Content Directive',
  component: ContentWrapperComponent,
  notes : {
    inputs: [
      {
        param: `content: string`,
        desc: `Key corresponding to label or content value in cms`
      }
    ],
    outputs: [],
    example: `<h5 content="content.label-example"></h5>

<div content="content.rtf-example"></div>

<span content="content.bad-key"></span>

<label content="Start Date"></label>`,
    notes: [
      `Works with any tag that allows <code class="highlight">innerHTML</code>`,
      `If a key is not found, the key will be displayed (see last example)`,
      `Example of dynamic key: <code class="p-left-sm highlight">content="{{ key }}"</code>`
    ]
  }
};