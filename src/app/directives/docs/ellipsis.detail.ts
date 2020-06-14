import { Detail } from '../../shared/detail/detail.model';
import { EllipsisWrapperComponent } from '../wrappers/ellipsis-wrapper/ellipsis-wrapper.component';

export const ellipsisDetail: Detail = {
  id: 'ellipsis',
  title: 'Ellipsis Pipe',
  component: EllipsisWrapperComponent,
  notes : {
    inputs: [
      {
        param: `str: string`,
        desc: `String to analyze`,
      },
      {
        param: `length?: number`,
        desc: `Optional. Maximum length of string. Default is 50.`
      }
    ],
    outputs: [
      {
        desc: `Ellipsized string`
      }
    ],
    example: `<p>{{ sampleText | ellipsis }}</p>

<p>{{ sampleText | ellipsis: 100 }}</p>`,
    notes: [
      `Length is total length of string including characters and ellipsis`,
      `See <a href="https://angular.io/api?type=pipe" target="_blank">the docs</a> for additional pipes built-in to angular`
    ]
  }
};