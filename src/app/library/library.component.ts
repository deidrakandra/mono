import { Component, OnInit } from '@angular/core';

import { MenuItem } from '@nda/angular';
import { libraryConfig } from './docs/library.config';
import { MenuParserUtil } from '../core/util/menu-parser.util';

@Component({
  selector: 'sg-library',
  templateUrl: './library.component.html'
})
export class LibraryComponent implements OnInit {

  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = MenuParserUtil.parse(libraryConfig, 'components');
  }

}
