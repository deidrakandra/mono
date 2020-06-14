import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ConfigurationService } from '../../../../services/lookup/config/configuration.service';
import { ContentService } from '../../../../services/lookup/content/content.service';
import { faqFixture, glossaryFixture, helpCenterFixture, MockConfigService, MockContentService } from '../../../../test/test.fixture';

import { HelpPanelContentComponent } from './help-panel-content.component';
import { HelpCenter } from '../../help-center.model';

@Component({
  template: `<nda-help-panel-content [helpCenter]="helpCenter"></nda-help-panel-content>`
})
class TestHostComponent {
  helpCenter: HelpCenter;
}

describe('Component: HelpPanelContent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [HelpPanelContentComponent, TestHostComponent],
        providers: [
          { provide: ConfigurationService, useValue: new MockConfigService() },
          { provide: ContentService, useValue: new MockContentService() }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.helpCenter = helpCenterFixture;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('content', () => {
    it('should display unavailable message when empty', () => {
      component.helpCenter = null;
      fixture.detectChanges();
  
      const div: HTMLElement = fixture.debugElement.query(By.css('div[content="help-center.unavailable"]')).nativeElement;
  
      expect(div).toBeTruthy();
    });
  
    it('should hide unavailable message when populated', () => {
      const div = fixture.debugElement.query(By.css('div[content="help-center.unavailable"]'));
  
      expect(div).toBeFalsy();
    });
  
    it('should display title', () => {
      const title: HTMLElement = fixture.debugElement.query(By.css('.content-title')).nativeElement;
  
      expect(title.innerText).toContain(helpCenterFixture.title);
    });
  
    it('should display overview', () => {
      const overview: HTMLElement = fixture.debugElement.query(By.css('.content-description')).nativeElement;
  
      expect(overview.innerText).toContain(helpCenterFixture.overview);
    });
  });

  describe('structure', () => {
    it('should display all associated faqs', () => {
      component.helpCenter.faqs.push(faqFixture, faqFixture);
      fixture.detectChanges();

      const faqs = fixture.debugElement.queryAll(By.css('nda-help-panel-faq'));

      expect(faqs.length).toBe(component.helpCenter.faqs.length);
    });

    it('should display all associated glossary terms', () => {
      component.helpCenter.glossary.push(glossaryFixture);
      fixture.detectChanges();
      
      const glossary = fixture.debugElement.queryAll(By.css('nda-help-panel-glossary'));

      expect(glossary.length).toBe(component.helpCenter.glossary.length);
    });
  });
});