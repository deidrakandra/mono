import { NgModule } from '@angular/core';

import { LoadingComponent } from '@nda/angular';

import { SharedModule } from "../shared/shared.module";
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from "./routing/library-routing.module";
import { ErrorWrapperComponent } from './wrappers/error-wrapper/error-wrapper.component';
import { HelpCenterWrapperComponent } from './wrappers/help-center-wrapper/help-center-wrapper.component';
import { SpinnerWrapperComponent } from './wrappers/spinner-wrapper/spinner-wrapper.component';
import { SigninWrapperComponent } from './wrappers/signin-wrapper/signin-wrapper.component';
import { FooterWrapperComponent } from './wrappers/footer-wrapper/footer-wrapper.component';
import { MenuWrapperComponent } from './wrappers/menu-wrapper/menu-wrapper.component';
import { ScrollWrapperComponent } from './wrappers/scroll-wrapper/scroll-wrapper.component';
import { CollapsibleWrapperComponent } from './wrappers/collapsible-wrapper/collapsible-wrapper.component';
import { WizardWrapperComponent } from './wrappers/wizard-wrapper/wizard-wrapper.component';
import { DatepickerWrapperComponent } from './wrappers/datepicker-wrapper/datepicker-wrapper.component';
import { InputWrapperComponent } from './wrappers/input-wrapper/input-wrapper.component';
import { NgxMaskModule } from 'ngx-mask';
import { TextareaWrapperComponent } from './wrappers/textarea-wrapper/textarea-wrapper.component';
import { SelectWrapperComponent } from './wrappers/select-wrapper/select-wrapper.component';

@NgModule({
  imports: [
    SharedModule,
    LibraryRoutingModule,
    NgxMaskModule
  ],
  declarations: [
    LibraryComponent,
    ErrorWrapperComponent,
    HelpCenterWrapperComponent,
    SpinnerWrapperComponent,
    SigninWrapperComponent,
    FooterWrapperComponent,
    MenuWrapperComponent,
    ScrollWrapperComponent,
    CollapsibleWrapperComponent,
    WizardWrapperComponent,
    DatepickerWrapperComponent,
    InputWrapperComponent,
    TextareaWrapperComponent,
    SelectWrapperComponent
  ],
  entryComponents: [
    LoadingComponent,
    SpinnerWrapperComponent,
    ErrorWrapperComponent,
    HelpCenterWrapperComponent,
    SigninWrapperComponent,
    FooterWrapperComponent,
    MenuWrapperComponent,
    ScrollWrapperComponent,
    CollapsibleWrapperComponent,
    WizardWrapperComponent,
    DatepickerWrapperComponent,
    InputWrapperComponent,
    TextareaWrapperComponent,
    SelectWrapperComponent
  ]
})
export class LibraryModule { }
