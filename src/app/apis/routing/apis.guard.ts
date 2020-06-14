import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigGuard } from '../../routing/config.guard';
import { apisConfig } from '../docs/apis.config';

@Injectable()
export class ApisGuard extends ConfigGuard {
  constructor(
    router: Router,
  ) {
    super(router, apisConfig);
  }
}