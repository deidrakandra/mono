import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ConfigurationService } from '../../services/lookup/config/configuration.service';
import { TemplateService } from '../../services/template/template.service';
import { MockConfigService, templateFixture } from '../../test/test.fixture';

import { APP_CONFIG } from '../../services/tokens';
import { footerExternalMenuItems } from '../../services/template/external-menu-items';

import { FooterComponent } from './footer.component';

describe('Component: Footer', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  const appConfig = {
    version: '1.0.0',
    hash: 'ab6d2d'
  };

  beforeEach(async(() => {
    const mockTemplateService: TemplateService = new TemplateService();
    mockTemplateService.load(templateFixture);

    TestBed.configureTestingModule({
        declarations: [FooterComponent],
        providers: [
          { provide: ConfigurationService, useValue: new MockConfigService() },
          { provide: TemplateService, useValue: mockTemplateService },
          { provide: APP_CONFIG, useValue: appConfig },
        ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display static links', () => {
    const nihLinks = fixture.debugElement.queryAll(By.css('a'));

    expect(nihLinks.length).toBe(3);
  }); 
  
  it('should display template additional menu items', () => {
    const additional = fixture.debugElement.queryAll(By.css('ul[data-test="additional"] > li'));

    expect(additional.length).toBe(templateFixture.footer.length);
  });

  it('should display template external menu items', () => {
    const external = fixture.debugElement.queryAll(By.css('ul[data-test="external"] > li'));

    expect(external.length).toBe(footerExternalMenuItems.length);
  });

  it('should display version & hash', () => {
    const version: HTMLElement = fixture.debugElement.query(By.css('.version')).nativeElement;

    expect(version.innerText).toContain(appConfig.version);
    expect(version.innerText).toContain(appConfig.hash);
  });
});