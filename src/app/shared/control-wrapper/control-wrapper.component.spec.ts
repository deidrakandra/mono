import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CollapsibleComponent } from '@nda/angular';

import { ControlWrapperComponent } from './control-wrapper.component';

@Component({
  template: `<sg-control-wrapper [form]="form"></sg-control-wrapper>`
})
class TestHostComponent {
  form: FormGroup;
}

describe('ControlWrapperComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        ControlWrapperComponent,
        CollapsibleComponent
      ],
      imports: [ ReactiveFormsModule, NoopAnimationsModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlWrapperComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
