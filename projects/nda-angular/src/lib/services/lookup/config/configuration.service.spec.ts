import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ConfigurationService } from './configuration.service';
import { SERVICE_CONFIG } from '../../tokens';
import { mockResponse } from '../../../test/test.util';
import { serviceConfigFixture } from '../../../test/test.fixture';

describe('Service: Configuration', () => {

  const mockDefaults = {
    'loading.default': 'Loading',
    'signin.header': 'Sign in to NDA',
    'signin.username' : 'Username',
    'retry.limit': '10'
  };

  const httpSpy = jasmine.createSpyObj('http', ['get']);
  httpSpy.get.and.returnValue(mockResponse(mockDefaults));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigurationService,
        { provide: SERVICE_CONFIG, useValue: serviceConfigFixture },
        { provide: HttpClient, useValue: httpSpy }
      ],
    });
  });

  it('should be created', inject([ConfigurationService], (service: ConfigurationService) => {
    expect(service).toBeTruthy();
  }));

});