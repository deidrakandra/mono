import { Injectable } from '@angular/core';
import { ConfigResolver } from '../../routing/config.resolver';
import { patternsConfig } from '../docs/patterns.config';

@Injectable()
export class PatternsResolver extends ConfigResolver {
  constructor() {
    super(patternsConfig);
  }
}