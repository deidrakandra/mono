import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import {
  helpCenterFixture, MockContentServiceDefault,
  serviceConfigFixture,
  templateFixture
} from '../../../test/test.fixture';
import { mockResponse } from '../../../test/test.util';

import { ContentService } from './content.service';
import { TemplateService } from '../../template/template.service';
import { SERVICE_CONFIG } from '../../tokens';

describe('Service: Content', () => {

  const httpSpy = jasmine.createSpyObj('http', ['get']);
  httpSpy.get.and.returnValue(mockResponse({ 'help.landing': helpCenterFixture }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContentService,
        { provide: TemplateService, useValue: new TemplateService() },
        { provide: SERVICE_CONFIG, useValue: serviceConfigFixture },
        { provide: HttpClient, useValue: httpSpy }
      ]
    });
  });

  it('should be created', inject([ContentService], (service: ContentService) => {
    expect(service).toBeTruthy();
  }));

  describe('', function () {
    it('should load the template', inject([ContentService, TemplateService], (service: ContentService, template: TemplateService) => {
      service.onLoadComplete({ template: templateFixture });

      expect(template.getFooterMenuItems().length).toBe(templateFixture.footer.length);
    }));

    it('should lookup help centers by route', () => {
      const service = new MockContentServiceDefault(httpSpy, { 'help.landing': helpCenterFixture });
      service.load()
        .then(() => {
          expect(service.lookupHelpCenter('landing')).toEqual(helpCenterFixture);
        });
    });

    it('should return help center key if no help available', () => {
      const service = new MockContentServiceDefault(httpSpy, { });
      service.load()
        .then(() => {
          expect(service.lookupHelpCenter('landing')).toContain('help.landing');
        });
    });
  });
});
