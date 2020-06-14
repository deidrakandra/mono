import { ConfigResolver } from '../../routing/config.resolver';
import { Injectable } from '@angular/core';
import { directivesConfig } from '../docs/directives.config';

@Injectable()
export class DirectivesResolver extends ConfigResolver {
  constructor() {
    super(directivesConfig)
  }
}