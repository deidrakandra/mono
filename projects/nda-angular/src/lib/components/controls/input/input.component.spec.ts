import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { InputComponent } from './input.component';

@Component({
  template: `<nda-input [type]="type" [label]="label" [errorMsg]="errorMsg" [isRequired]="isRequired" [placeholder]="placeholder" [inputMask]="mask"></nda-input>`
})
class TestHostComponent {
  label: string;
  errorMsg: string;
  isRequired: boolean;
  placeholder: string;
  mask: string;
  type: string;
}

describe('Component: Input', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputComponent,
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

  it('should not have placeholder by default', () => {
    const inputEl: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputEl.attributes['placeholder'].value).toBe('undefined');
  });

  it('should have placeholder', () => {
    const placeholder = 'Placeholder Text';
    component.placeholder = placeholder;
    fixture.detectChanges();

    const inputEl: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputEl.attributes['placeholder'].value).toBe(placeholder);
  });

  it('should be text type input by default', () => {
    const inputEl: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputEl.attributes['type'].value).toBe('text');
  });

  it('should be number type input when specified', () => {
    const numberType = 'number';
    component.type = numberType;
    fixture.detectChanges();

    const inputEl: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputEl.attributes['type'].value).toBe(numberType);
  });

});
