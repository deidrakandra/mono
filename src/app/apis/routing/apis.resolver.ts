import { Injectable } from '@angular/core';
import { ConfigResolver } from '../../routing/config.resolver';
import { apisConfig } from '../docs/apis.config';

@Injectable()
export class ApisResolver extends ConfigResolver {
  constructor() {
    super(apisConfig);
  }
}