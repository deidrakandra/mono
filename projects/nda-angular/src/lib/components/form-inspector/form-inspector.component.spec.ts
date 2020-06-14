import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup } from '@angular/forms';

import { FormInspectorComponent } from './form-inspector.component';
import { CollapsibleComponent } from '../components';

@Component({
  template: `<nda-form-inspector [form]="form"></nda-form-inspector>`
})
class TestHostComponent {
  public form: FormGroup;
}

describe('Component: FormInspector', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormInspectorComponent,
        TestHostComponent,
        CollapsibleComponent
      ],
      imports: [
        NoopAnimationsModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
