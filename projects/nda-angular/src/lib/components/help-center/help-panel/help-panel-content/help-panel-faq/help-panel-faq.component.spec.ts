import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ConfigurationService } from '../../../../../services/lookup/config/configuration.service';
import { ContentService } from '../../../../../services/lookup/content/content.service';
import { faqFixture, MockConfigService, MockContentService, videoFixture } from '../../../../../test/test.fixture';

import { HelpPanelFaqComponent } from './help-panel-faq.component';
import { Faq } from '../../../help-center.model';

@Component({
  template: `<nda-help-panel-faq [faq]="faq" [videoIcon]="videoIcon"></nda-help-panel-faq>`
})
class TestHostComponent {
  faq: Faq;
  videoIcon: string;
}

describe('Component: HelpPanelFaq', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let header: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [HelpPanelFaqComponent, TestHostComponent],
        imports: [NoopAnimationsModule],
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
    component.faq = faqFixture;
    fixture.detectChanges();
    header = fixture.debugElement.query(By.css('.faq-question')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('content', () => {
    it('should display question', () => {
      const question: HTMLElement = fixture.debugElement.query(By.css('.faq-question')).nativeElement;

      expect(question.innerText).toContain(faqFixture.question);
    });

    it('should display answer', () => {
      header.click();
      fixture.detectChanges();
      const answer: HTMLElement = fixture.debugElement.query(By.css('.faq-answer')).nativeElement;

      expect(answer.innerText).toContain(faqFixture.answer);
    });
    it('should display last published', () => {
      header.click();
      fixture.detectChanges();
      const lastPub: HTMLElement = fixture.debugElement.query(By.css('.last-published')).nativeElement;

      expect(lastPub.innerText).toContain(faqFixture.lastPublished);
    });

    it('should display video icon if video present', () => {
      const icon = fixture.debugElement.query(By.css('img'));
      expect(icon).toBeFalsy();

      component.faq['video'] = videoFixture;
      fixture.detectChanges();

      const iconPostChange = fixture.debugElement.query(By.css('img'));
      expect(iconPostChange).toBeTruthy();
    });
  });

  describe('state', () => {
    it('should not be visible if faq is missing', () => {
      component.faq = null;
      fixture.detectChanges();

      const container = fixture.debugElement.query(By.css('.faq'));
      expect(container).toBeFalsy();
    }); 
    
    it('should be collapsed by default', () => {
      const faqComponent = fixture.debugElement.query(By.directive(HelpPanelFaqComponent));
      const question = faqComponent.query(By.css('.faq-question')).nativeElement;
      const answer = faqComponent.query(By.css('.faq-answer')).nativeElement;

      expect(faqComponent.componentInstance.collapse).toBeTruthy();
      expect(question.classList).not.toContain('selected-help-item');
      expect(answer.classList).toContain('collapsed');
    });

    it('should expand when clicked', () => {
      const faqComponent = fixture.debugElement.query(By.directive(HelpPanelFaqComponent));
      const container: HTMLElement = faqComponent.query(By.css('.faq')).nativeElement;
      const question: HTMLElement = faqComponent.query(By.css('.faq-question')).nativeElement;
      const answer: HTMLElement = faqComponent.query(By.css('.faq-answer')).nativeElement;

      container.click();
      fixture.detectChanges();

      expect(faqComponent.componentInstance.collapse).toBeFalsy();
      expect(question.classList).toContain('selected-help-item');
      expect(answer.classList).not.toContain('collapsed');
    });

    it('should display video when included & expanded', () => {
      component.faq['video'] = videoFixture;
      const faqComponent = fixture.debugElement.query(By.directive(HelpPanelFaqComponent));
      const container: HTMLElement = faqComponent.query(By.css('.faq')).nativeElement;

      container.click();
      fixture.detectChanges();

      const videoPost = faqComponent.query(By.css('nda-video'));
      expect(videoPost).toBeTruthy();

    }); 
  });
});