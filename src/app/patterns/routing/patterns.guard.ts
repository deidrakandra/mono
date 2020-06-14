import { ConfigGuard } from '../../routing/config.guard';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { patternsConfig } from '../docs/patterns.config';

@Injectable()
export class PatternsGuard extends ConfigGuard {
  constructor(router: Router) {
    super(router, patternsConfig);
  }
}