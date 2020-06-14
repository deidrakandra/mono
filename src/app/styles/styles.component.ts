import { Component, OnInit } from '@angular/core';
import { MenuItem } from "@nda/angular";

import { SectionConfig, stylesConfiguration } from "./docs/styles.config";

@Component({
  templateUrl: './styles.component.html'
})
export class StylesComponent implements OnInit {

  sections: SectionConfig[];
  menuItems: MenuItem[];

  ngOnInit() {
    this.sections = stylesConfiguration;
    this.menuItems = this.sections.map((section: SectionConfig) => {
      return {
        anchor: section.id,
        label: section.title
      }
    });
  }
}
