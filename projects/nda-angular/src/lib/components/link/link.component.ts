import { Component, Input } from '@angular/core';

import { ObjectUtil } from '../../util/object.util';

import { Link } from './link.model';

@Component({
  selector: 'nda-link',
  templateUrl: './link.component.html'
})
export class LinkComponent {

  @Input() link: Link;
  @Input() target: string;

  get name(): string {
    return ObjectUtil.getOrEmpty(this.link, 'name');
  }

  get title(): string {
    return ObjectUtil.getOrEmpty(this.link, 'title');
  }

  get url(): string {
    return ObjectUtil.getOrEmpty(this.link, 'url');
  }

}
