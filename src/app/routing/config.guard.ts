import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Detail } from '../shared/detail/detail.model';
import { Api } from '../shared/api-docs/api-doc.model';

export abstract class ConfigGuard implements CanActivate {

  protected constructor(
    private router: Router,
    private config: { [id:string] : Detail | Api }
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (route.firstChild) {
      return true;
    } else {
      const redirect = `/${route.parent.url[0].path}/${Object.keys(this.config)[0]}`;
      this.router.navigate([redirect]);
      return false;
    }
  }
}