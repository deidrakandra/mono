import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ConfigurationService } from '../../services/lookup/config/configuration.service';
import { ContentService } from '../../services/lookup/content/content.service';
import { MockConfigService, MockContentService } from '../../test/test.fixture';

import { HelpCenterComponent } from './help-center.component';
import { HelpButtonComponent } from './help-button/help-button.component';
import { HelpPanelComponent } from './help-panel/help-panel.component';
import { HelpPanelHeaderComponent } from './help-panel/help-panel-header/help-panel-header.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('Component: HelpCenter', () => {
  let component: HelpCenterComponent;
  let fixture: ComponentFixture<HelpCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [HelpCenterComponent, HelpButtonComponent, HelpPanelComponent, HelpPanelHeaderComponent],
        imports: [NoopAnimationsModule, RouterTestingModule],
        providers: [
          { provide: ConfigurationService, useValue: new MockConfigService() },
          { provide: ContentService, useValue: new MockContentService() }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open panel when help button clicked', () => {
    const helpButton: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    helpButton.click();

    expect(component.displayHelp).toBeTruthy();
  });

  it('should close panel when closer clicked', () => {
    const helpButton: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    helpButton.click();

    const closer: HTMLElement = fixture.debugElement.query(By.css('.clickable')).nativeElement;
    closer.click();

    expect(component.displayHelp).toBeFalsy();
  });

  it('should close panel on esc', () => {
    const helpButton: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    helpButton.click();

    const escape = new KeyboardEvent('keyup', { key: "Escape" });
    window.dispatchEvent(escape);
    expect(component.displayHelp).toBeFalsy();
  });
});