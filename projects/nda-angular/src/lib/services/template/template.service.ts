import { Injectable } from '@angular/core';

import { Template } from "./template";

import { footerExternalMenuItems } from "./external-menu-items";
import { Link } from '../../components/link/link.model';

@Injectable()
export class TemplateService {

  private template: Template;

  load(template: Template) {
    this.template = template;
  }

  getFooterMenuItems(): Link[] {
    return this.template.footer.map((item: Link) => {
      return {
        ...item,
        url: this.getAbsolute(item.url)
      } as Link
    });
  }

  getExternalFooterMenuItems(): Link[] {
    return footerExternalMenuItems;
  }

  private getAbsolute(url: string): string {
    return `${this.template.nda.url}${url}`;
  }
}
