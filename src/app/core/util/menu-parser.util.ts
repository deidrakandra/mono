import { MenuItem } from '@nda/angular';

import { Detail } from '../../shared/detail/detail.model';


export class MenuParserUtil {

  public static parse(configObj, link: string): MenuItem[] {
    return Object.values(configObj).map((config: Detail) => {
      return {
        label: config.title,
        routerLink: [link, config.id]
      }
    });
  }
}