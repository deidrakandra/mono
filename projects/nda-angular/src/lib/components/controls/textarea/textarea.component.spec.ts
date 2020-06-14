import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaComponent } from './textarea.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  template: `<nda-textarea [label]="label" [isRequired]="req" [errorMsg]="error"></nda-textarea>`
})
class TestHostComponent {
  label: string;
  req: boolean;
  error: string;
}
describe('Component: Textarea', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextAreaComponent,
        TestHostComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
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
});
