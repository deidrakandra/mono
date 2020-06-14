import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@nda/angular';

import { MenuParserUtil } from '../core/util/menu-parser.util';
import { apisConfig } from './docs/apis.config';

@Component({
  selector: 'sg-apis',
  templateUrl: './apis.component.html'
})
export class ApisComponent implements OnInit {

  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = MenuParserUtil.parse(apisConfig, 'apis');
  }

}
