import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigGuard } from '../../routing/config.guard';
import { directivesConfig } from '../docs/directives.config';

@Injectable()
export class DirectivesGuard extends ConfigGuard {
  constructor(
    router: Router,
  ) {
    super(router, directivesConfig);
  }
}