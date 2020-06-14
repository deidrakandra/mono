import { Component, OnInit } from '@angular/core';
import { ConfigKey } from "../../../../services/lookup/config/config-key.enum";
import { ConfigurationService } from "../../../../services/lookup/config/configuration.service";

@Component({
  selector: 'nda-help-panel-footer',
  templateUrl: './help-panel-footer.component.html',
  styleUrls: ['./help-panel-footer.component.scss']
})
export class HelpPanelFooterComponent implements OnInit {

  email: string;

  constructor(
    private config: ConfigurationService
  ) { }

  ngOnInit() {
    this.email = `mailto:${this.config.lookup(ConfigKey.HELP_DESK_EMAIL)}`;
  }

}