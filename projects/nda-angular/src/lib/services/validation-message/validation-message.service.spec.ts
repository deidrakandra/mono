import { inject, TestBed } from '@angular/core/testing';

import { ValidationMessageService } from './validation-message.service';
import { ConfigurationService } from '../services';
import { MockConfigService } from '../../test/test.fixture';

describe('ValidationMessageService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        ValidationMessageService,
        { provide: ConfigurationService, useValue: new MockConfigService() }
      ]
    })
  );

  it('should be created', inject([ValidationMessageService], (service: ValidationMessageService) => {
    expect(service).toBeTruthy();
  }));
});
