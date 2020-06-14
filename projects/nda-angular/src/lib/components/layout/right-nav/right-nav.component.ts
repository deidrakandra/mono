import { Component, Input } from '@angular/core';

import { MenuItem } from '../../menu/menu-item/menu-item.model';

@Component({
  selector: 'nda-right-nav',
  templateUrl: './right-nav.component.html'
})
export class RightNavComponent {

  @Input() menuItems: MenuItem[];

}
