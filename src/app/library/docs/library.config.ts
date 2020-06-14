import { Detail } from '../../shared/detail/detail.model';

import { datePickerDetail } from './datepicker.detail';
import { collapsibleDetail } from './collapsible.detail';
import { exportDetail } from './error.detail';
import { footerDetail } from './footer.detail';
import { helpCenterDetail } from './help-center.detail';
import { loadingDetail } from './loading.detail';
import { menuDetail } from './menu.detail';
import { scrollDetail } from './scroll.detail';
import { signInDetail } from './sign-in.detail';
import { spinnerDetail } from './spinner.detail';
import { wizardDetail } from './wizard.detail';
import { inputDetail } from './input.detail';
import { textareaDetail } from './textarea.detail';
import { selectDetail } from './select.detail';


export const libraryConfig: { [id:string] : Detail } = {
  'collapsible': collapsibleDetail,
  'datepicker': datePickerDetail,
  'error' : exportDetail,
  'footer' : footerDetail,
  'help-center' : helpCenterDetail,
  'input' : inputDetail,
  'loading' : loadingDetail,
  'menu' : menuDetail,
  'scroll' : scrollDetail,
  'select' : selectDetail,
  'sign-in' : signInDetail,
  'spinner' : spinnerDetail,
  'textarea' : textareaDetail,
  'wizard': wizardDetail
};
