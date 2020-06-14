import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ConfigurationService } from '../../../../../services/lookup/config/configuration.service';
import { ContentService } from '../../../../../services/lookup/content/content.service';
import { glossaryFixture, MockConfigService, MockContentService } from '../../../../../test/test.fixture';

import { HelpPanelGlossaryComponent } from './help-panel-glossary.component';
import { Glossary } from '../../../help-center.model';

@Component({
  template: `<nda-help-panel-glossary [glossaryTerm]="term"></nda-help-panel-glossary>`
})
class TestHostComponent {
  term: Glossary;
}

describe('Component: HelpPanelGlossary', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let header: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [HelpPanelGlossaryComponent, TestHostComponent],
        imports: [NoopAnimationsModule],
        providers: [
          { provide: ConfigurationService, useValue: new MockConfigService() },
          { provide: ContentService, useValue: new MockContentService() }
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.term = glossaryFixture;
    fixture.detectChanges();
    header = fixture.debugElement.query(By.css('.glossary-term')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('content', () => {
    it('should display term', () => {
      const term: HTMLElement = fixture.debugElement.query(By.css('.glossary-term')).nativeElement;

      expect(term.innerText).toContain(glossaryFixture.term);
    });

    it('should display definition', () => {
      header.click();
      fixture.detectChanges();
      const definition: HTMLElement = fixture.debugElement.query(By.css('.glossary-definition')).nativeElement;

      expect(definition.innerText).toContain(glossaryFixture.definition);
    });

    it('should display last published date', () => {
      header.click();
      fixture.detectChanges();
      const lastPub: HTMLElement = fixture.debugElement.query(By.css('.last-published')).nativeElement;

      expect(lastPub.innerText).toContain(glossaryFixture.lastPublished);
    });
  });

  describe('state', () => {
    it('should not be visible if glossary is missing', () => {
      component.term = null;
      fixture.detectChanges();

      const glossary = fixture.debugElement.query(By.css('.glossary'));
      expect(glossary).toBeFalsy();
    }); 

    it('should be collapsed by default', () => {
      const glossaryComponent = fixture.debugElement.query(By.directive(HelpPanelGlossaryComponent));
      const glossaryTerm: HTMLElement = glossaryComponent.query(By.css('.glossary-term')).nativeElement;

      expect(glossaryComponent.componentInstance.collapse).toBeTruthy();
      expect(glossaryTerm.classList).not.toContain('selected-help-item');
    });

    it('should expand when clicked', () => {
      const glossaryComponent = fixture.debugElement.query(By.directive(HelpPanelGlossaryComponent));
      const container: HTMLElement = glossaryComponent.query(By.css('.glossary')).nativeElement;
      const glossaryTerm: HTMLElement = glossaryComponent.query(By.css('.glossary-term')).nativeElement;

      container.click();
      fixture.detectChanges();

      expect(glossaryComponent.componentInstance.collapse).toBeFalsy();
      expect(glossaryTerm.classList).toContain('selected-help-item');
    });
  });
});