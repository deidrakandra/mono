import { Component, Input } from '@angular/core';

import { MenuItem } from '../../components';

@Component({
  selector: 'nda-left-nav',
  templateUrl: './left-nav.component.html'
})
export class LeftNavComponent {

  @Input() menuItems: MenuItem[];

}
