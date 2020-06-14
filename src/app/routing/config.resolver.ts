import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Detail } from '../shared/detail/detail.model';
import { Api } from '../shared/api-docs/api-doc.model';

export abstract class ConfigResolver implements Resolve<any> {

  protected constructor (
    private config: { [id:string] : Detail | Api }
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.config[route.paramMap.get('detail')]
  }
}