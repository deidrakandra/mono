import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ConfigurationService } from '../../../services/lookup/config/configuration.service';
import { ContentService } from '../../../services/lookup/content/content.service';
import { helpCenterFixture, MockConfigService } from '../../../test/test.fixture';

import { HelpPanelComponent } from './help-panel.component';
import { HelpPanelContentComponent } from './help-panel-content/help-panel-content.component';
import { HelpPanelFooterComponent } from './help-panel-footer/help-panel-footer.component';
import { HelpPanelHeaderComponent } from './help-panel-header/help-panel-header.component';

@Component({
  template: `<nda-help-panel [activeRoute]="route" [displayHelp]="displayHelp" (closeHelp)="closeHelp()"></nda-help-panel>`
})
class TestHostComponent {
  route: string;
  displayHelp: boolean;
  closeHelp = jasmine.createSpy('closeHelpSpy');
}

describe('Component: HelpPanel', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let panel: HTMLElement;

  const contentSpy = jasmine.createSpyObj('contentSpy', ['lookupHelpCenter']);
  contentSpy.lookupHelpCenter.and.returnValue(helpCenterFixture);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [HelpPanelComponent, HelpPanelContentComponent, HelpPanelFooterComponent, HelpPanelHeaderComponent, TestHostComponent],
        imports: [NoopAnimationsModule],
        providers: [
          { provide: ConfigurationService, useValue: new MockConfigService() },
          { provide: ContentService, useValue: contentSpy }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    panel = fixture.debugElement.query(By.css('.help-panel')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be hidden by default', () => {
    expect(panel.offsetLeft).toBeLessThan(panel.offsetWidth);
  });

  it('should be visible when display is true', () => {
    component.displayHelp = true;
    fixture.detectChanges();

    expect(panel.offsetLeft).toBeGreaterThan(panel.offsetWidth);
  });

  it('should display last published', () => {
    expect(panel.innerText).toContain(helpCenterFixture.lastPublished);
  }); 
});