import { Component, Inject, OnInit } from '@angular/core';

import { TemplateService } from "../../services/template/template.service";
import { APP_CONFIG } from "../../services/tokens";
import { AppConfig } from "../../module-config";

import { TargetType } from "../link/target-type";
import { Link } from '../link/link.model';

@Component({
  selector: 'nda-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menuItems: Link[];
  externalMenuItems: Link[];

  constructor(
    private template: TemplateService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  ngOnInit() {
    this.menuItems = this.template.getFooterMenuItems();
    this.externalMenuItems = this.template.getExternalFooterMenuItems();
  }

  get target(): string {
    return TargetType.NEW_TAB;
  }

  get version(): string {
    return `v${this.config.version} | ${this.config.hash}`;
  }
}
