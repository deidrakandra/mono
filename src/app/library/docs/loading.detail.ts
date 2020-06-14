import { LoadingComponent } from '@nda/angular';
import { Detail } from '../../shared/detail/detail.model';

export const loadingDetail: Detail = {
  id: 'loading',
  title: 'Loading',
  component: LoadingComponent,
  notes: {
    inputs: [
      {
        param: `contentKey: string`,
        desc: `Optional. Key from cms to override the default message.`
      }
    ],
    outputs: [],
    example: `<nda-loading [contentKey]="overrideDefault"></nda-loading>`,
    notes: [
      'By default, component displays "Loading". To override this for each instance of the component, pass in the corresponding <code class="highlight">contentKey</code>. To override for the entire app, add a label to your rest page with a key of <code class="highlight">loading.default</code>'
    ]
  }
};