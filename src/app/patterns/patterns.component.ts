import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@nda/angular';

import { MenuParserUtil } from '../core/util/menu-parser.util';
import { patternsConfig } from './docs/patterns.config';

@Component({
  selector: 'sg-patterns',
  templateUrl: './patterns.component.html'
})
export class PatternsComponent implements OnInit {

  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = MenuParserUtil.parse(patternsConfig, 'patterns');
  }

}
