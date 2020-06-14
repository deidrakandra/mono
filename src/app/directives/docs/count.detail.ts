import { Detail } from '../../shared/detail/detail.model';
import { CountWrapperComponent } from '../wrappers/count-wrapper/count-wrapper.component';

export const countDetail: Detail = {
  id: 'count',
  title: 'Count Pipe',
  component: CountWrapperComponent,
  notes : {
    inputs: [
      {
        param: `array: any[]`,
        desc: `Array to count. Returns "--" when array is null`
      }
    ],
    outputs: [
      {
        desc: `array length or null indicator`
      }
    ],
    example: `<div>array count is {{ array | count }}</div>`,
    notes: [
      `See <a href="https://angular.io/api?type=pipe" target="_blank">docs</a> for additional pipes built-in to angular`
    ]
  }
};