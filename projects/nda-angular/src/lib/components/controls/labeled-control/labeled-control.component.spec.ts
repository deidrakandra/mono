import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LabeledControlComponent } from './labeled-control.component';
import { ContentDirective } from '../../../directives/directives';
import { ContentService } from '../../../services/lookup/content/content.service';

@Component({
  template: `
      <nda-labeled-control [label]="label" [isRequired]="required" [errorMsg]="errorMsg">
          <input type="text">
      </nda-labeled-control>`
})
class TestHostComponent {
  label: string;
  required: boolean;
  errorMsg: string;
}
describe('Component: LabeledControl', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  let contentServiceSpy = jasmine.createSpyObj(['lookup']);

  const label: string = 'Start Date';
  const errorMsg: string = 'Invalid';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LabeledControlComponent,
        TestHostComponent,
        ContentDirective
      ],
      providers: [
        { provide: ContentService, useValue: contentServiceSpy }
      ],
        schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    contentServiceSpy.lookup.and.returnValue(label);

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.label = label;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have label by default', () => {
    component.label = null;
    fixture.detectChanges();

    const labelEl = fixture.debugElement.query(By.css('.input-label'));
    expect(labelEl).toBeFalsy();
  });

  it('should have label', () => {
    const labelEl: HTMLElement = fixture.debugElement.query(By.css('.input-label')).nativeElement;
    expect(labelEl.innerText).toBe(label);
  });

  it('should have not have required asterisk by default', () => {
    const spanEl: HTMLElement = fixture.debugElement.query(By.css('.input-label span')).nativeElement;
    expect(spanEl.classList).not.toContain('required');
  });

  it('should have required asterisk', () => {
    component.required = true;
    fixture.detectChanges();

    const spanEl: HTMLElement = fixture.debugElement.query(By.css('.input-label span')).nativeElement;
    expect(spanEl.classList).toContain('required');
  });

  it('should have error state with error message', () => {
    component.errorMsg = errorMsg;
    fixture.detectChanges();

    const msgEl: HTMLElement = fixture.debugElement.query(By.css('.validation-msg')).nativeElement;
    expect(msgEl.innerText).toBe(errorMsg);
  });

});
