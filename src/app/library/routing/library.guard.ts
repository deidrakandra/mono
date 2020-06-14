import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigGuard } from '../../routing/config.guard';
import { libraryConfig } from '../docs/library.config';

@Injectable()
export class LibraryGuard extends ConfigGuard {
  constructor(
    router: Router,
  ) {
    super(router, libraryConfig);
  }
}