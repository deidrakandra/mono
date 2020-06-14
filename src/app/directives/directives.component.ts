import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@nda/angular';

import { directivesConfig } from './docs/directives.config';
import { MenuParserUtil } from '../core/util/menu-parser.util';

@Component({
  selector: 'sg-directives',
  templateUrl: './directives.component.html'
})
export class DirectivesComponent implements OnInit {

  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = MenuParserUtil.parse(directivesConfig, 'directives');
  }

}
