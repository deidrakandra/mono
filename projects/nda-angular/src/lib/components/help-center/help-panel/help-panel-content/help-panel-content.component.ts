import { Component, Input } from '@angular/core';
import { ConfigKey } from "../../../../services/lookup/config/config-key.enum";
import { Faq, Glossary, HelpCenter } from "../../help-center.model";
import { ConfigurationService } from "../../../../services/lookup/config/configuration.service";

@Component({
  selector: 'nda-help-panel-content',
  templateUrl: './help-panel-content.component.html',
  styleUrls: ['./help-panel-content.component.scss']
})
export class HelpPanelContentComponent {

  @Input() helpCenter: HelpCenter;

  videoIcon: string;

  constructor(
    private config: ConfigurationService
  ) {
    this.videoIcon = config.lookup(ConfigKey.VIDEO_ICON);
  }

  get available(): boolean {
    return this.helpCenter instanceof Object;
  }

  get title(): string {
    return this.helpCenter.title;
  }

  get overview(): string {
    return this.helpCenter.overview;
  }

  get faqs(): Faq[] {
    return this.helpCenter.faqs;
  }

  get glossary(): Glossary[] {
    return this.helpCenter.glossary;
  }
}
