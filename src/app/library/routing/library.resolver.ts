import { ConfigResolver } from '../../routing/config.resolver';
import { libraryConfig } from '../docs/library.config';
import { Injectable } from '@angular/core';

@Injectable()
export class LibraryResolver extends ConfigResolver {
  constructor() {
    super(libraryConfig);
  }
}