import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ConfigurationService } from '../../../../services/lookup/config/configuration.service';
import { ContentService } from '../../../../services/lookup/content/content.service';
import { MockContentService } from '../../../../test/test.fixture';

import { HelpPanelFooterComponent } from './help-panel-footer.component';


describe('Component: HelpPanelFooter', () => {
  let component: HelpPanelFooterComponent;
  let fixture: ComponentFixture<HelpPanelFooterComponent>;
  const configSpy = jasmine.createSpyObj('ConfigurationService', ['lookup']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [HelpPanelFooterComponent],
        providers: [
          { provide: ConfigurationService, useValue: configSpy },
          { provide: ContentService, useValue: new MockContentService() }
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPanelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pull email from config', () => {
    const email = 'nda-help@nih.gov';
    const config = TestBed.get(ConfigurationService);

    config.lookup.and.returnValue(email);
    component.ngOnInit();
    fixture.detectChanges();

    const emailEl: HTMLAnchorElement = fixture.debugElement.query(By.css('a[content="help.email"]')).nativeElement;

    expect(config.lookup).toHaveBeenCalled();
    expect(emailEl.href).toContain(email);
  });
});