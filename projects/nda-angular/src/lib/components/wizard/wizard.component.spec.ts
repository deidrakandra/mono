import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { MockConfigService, MockContentService } from '../../test/test.fixture';
import { ConfigurationService, ContentService } from '../../services/services';

import { WizardComponent } from './wizard.component';
import { WizardStep } from './wizard-step/wizard-step.model';

@Component({
  template: `<nda-wizard [steps]="steps"></nda-wizard>`
})
class TestHostComponent {
  steps: WizardStep[];
}

describe('Component: Wizard', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  const steps: WizardStep[] = [
    {
      title: 'test',
      activeIcon: 'bolt',
      index: 1
    },
    {
      title: 'test two',
      activeIcon: 'check',
      index: 2
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardComponent, TestHostComponent ],
      imports: [ RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ContentService, useValue: new MockContentService() },
        { provide: ConfigurationService, useValue: new MockConfigService() },
      ]
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.steps = steps;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create steps', () => {
    const stepComponents = fixture.debugElement.queryAll(By.css('nda-wizard-step'));

    expect(stepComponents.length).toBe(steps.length);
  }); 
});
