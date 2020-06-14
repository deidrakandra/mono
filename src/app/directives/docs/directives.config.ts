import { Detail } from '../../shared/detail/detail.model';

import { contentDetail } from './content.detail';
import { countDetail } from './count.detail';
import { ellipsisDetail } from './ellipsis.detail';
import { focusDetail } from './focus.detail';


export const directivesConfig: { [id:string] : Detail } = {
  'content' : contentDetail,
  'focus': focusDetail,
  'count' : countDetail,
  'ellipsis' : ellipsisDetail,
};