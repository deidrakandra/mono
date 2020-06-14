import { SigninWrapperComponent } from '../wrappers/signin-wrapper/signin-wrapper.component';
import { Detail } from '../../shared/detail/detail.model';

export const signInDetail: Detail = {
  id: 'sign-in',
  title: 'Sign In',
  component: SigninWrapperComponent,
  notes: {
    inputs: [],
    outputs: [
      {
        param: `authenticate: object`,
        desc: `Returns event object containing entered username and password`
      }
    ],
    example: `<nda-signin (authenticate)="auth($event)"></nda-signin>`,
    notes: [
      `Use enclosing container for sizing`
    ]
  }
};