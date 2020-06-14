import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStepComponent } from './wizard-step.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { StepState } from './wizard-step.model';

@Component({
  template: `<nda-wizard-step [state]="state"></nda-wizard-step>`
})
class TestHostComponent {
  state: StepState
}

describe('Component: WizardStep', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardStepComponent, TestHostComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.state = {
      icon: 'bolt',
      active: false,
      complete: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
