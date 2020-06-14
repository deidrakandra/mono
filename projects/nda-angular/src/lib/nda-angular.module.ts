import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { NgxSpinnerModule } from "ngx-spinner";
import { NgxMaskModule } from 'ngx-mask';
import { MomentModule } from 'ngx-moment';

import { ComponentHostDirective, ContentDirective, DropZoneDirective, FocusDirective } from "./directives/directives";
import { EllipsisPipe, CountPipe } from "./pipes/pipes";

import { TemplateService } from "./services/template/template.service";
import { ConfigurationService, ContentService, ErrorMessageService, ValidationMessageService } from './services/services';
import { APP_CONFIG, SERVICE_CONFIG } from "./services/tokens";
import { ModuleConfig } from "./module-config";

import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { LinkComponent } from "./components/link/link.component";
import { HelpButtonComponent } from "./components/help-center/help-button/help-button.component";
import { HelpPanelComponent } from "./components/help-center/help-panel/help-panel.component";
import { HelpPanelHeaderComponent } from "./components/help-center/help-panel/help-panel-header/help-panel-header.component";
import { HelpPanelFooterComponent } from "./components/help-center/help-panel/help-panel-footer/help-panel-footer.component";
import { HelpPanelContentComponent } from "./components/help-center/help-panel/help-panel-content/help-panel-content.component";
import { HelpPanelFaqComponent } from "./components/help-center/help-panel/help-panel-content/help-panel-faq/help-panel-faq.component";
import { HelpPanelGlossaryComponent } from "./components/help-center/help-panel/help-panel-content/help-panel-glossary/help-panel-glossary.component";
import { VideoComponent } from "./components/help-center/video/video.component";
import { WizardStepComponent } from './components/wizard/wizard-step/wizard-step.component';
import { DateHelperComponent } from './components/controls/datepicker/date-helper/date-helper.component';
import { FormInspectorComponent } from './components/form-inspector/form-inspector.component';
import { LabeledControlComponent } from './components/controls/labeled-control/labeled-control.component';

import { SignInComponent, MenuComponent, FooterComponent, HelpCenterComponent,
  ErrorMessageComponent, LoadingComponent, SpinnerComponent, LeftNavComponent,
  RightNavComponent, CollapsibleComponent, WizardComponent, DatepickerComponent,
  InputComponent, ScrollComponent, SelectComponent, TextAreaComponent } from './components/components';

export function loadContent(content: ContentService) {
  return () => content.load();
}

export function loadConfig(config: ConfigurationService) {
  return () => config.load();
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MomentModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    HelpButtonComponent,
    HelpPanelComponent,
    HelpCenterComponent,
    HelpPanelHeaderComponent,
    HelpPanelFooterComponent,
    HelpPanelContentComponent,
    HelpPanelFaqComponent,
    HelpPanelGlossaryComponent,
    VideoComponent,

    ErrorMessageComponent,
    FooterComponent,
    LoadingComponent,
    LinkComponent,
    SignInComponent,
    SpinnerComponent,
    MenuComponent,
    MenuItemComponent,
    ScrollComponent,

    LeftNavComponent,
    RightNavComponent,

    ComponentHostDirective,
    ContentDirective,
    DropZoneDirective,
    FocusDirective,

    EllipsisPipe,
    CountPipe,
    CollapsibleComponent,
    WizardComponent,
    WizardStepComponent,
    DatepickerComponent,
    DateHelperComponent,
    InputComponent,
    FormInspectorComponent,
    TextAreaComponent,
    LabeledControlComponent,
    SelectComponent
  ],
  exports: [
    ErrorMessageComponent,
    FooterComponent,
    LoadingComponent,
    SignInComponent,
    SpinnerComponent,
    MenuComponent,
    HelpButtonComponent,
    HelpCenterComponent,
    ScrollComponent,
    CollapsibleComponent,
    WizardComponent,
    DatepickerComponent,
    InputComponent,

    LeftNavComponent,
    RightNavComponent,

    ComponentHostDirective,
    ContentDirective,
    DropZoneDirective,
    FocusDirective,

    EllipsisPipe,
    CountPipe,
    FormInspectorComponent,
    TextAreaComponent,
    SelectComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: loadContent,
      deps: [ ContentService ],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [ ConfigurationService ],
      multi: true
    }
  ]
})
export class NdaModule {

  static forRoot(config: ModuleConfig): ModuleWithProviders {
    return {
      ngModule: NdaModule,
      providers: [
        ConfigurationService,
        ContentService,
        TemplateService,
        ErrorMessageService,
        ValidationMessageService,
        { provide: SERVICE_CONFIG, useValue: config.serviceConfig },
        { provide: APP_CONFIG, useValue: config.appConfig }
      ]
    };
  }

}
