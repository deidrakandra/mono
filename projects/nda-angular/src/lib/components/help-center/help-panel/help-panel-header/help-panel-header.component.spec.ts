import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationService } from '../../../../services/lookup/config/configuration.service';
import { ContentService } from '../../../../services/lookup/content/content.service';
import { MockConfigService, MockContentService } from '../../../../test/test.fixture';

import { HelpPanelHeaderComponent } from './help-panel-header.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<nda-help-panel-header (closeHelp)="close()"></nda-help-panel-header>`
})
class TestHostComponent {
  close = jasmine.createSpy('closeSpy');
}

describe('Component: HelpPanelHeader', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [HelpPanelHeaderComponent, TestHostComponent],
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close event when clicked', () => {
    const closer: HTMLElement = fixture.debugElement.query(By.css('.clickable')).nativeElement;
    closer.click();

    expect(component.close).toHaveBeenCalled();
  }); 
});