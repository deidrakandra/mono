import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Option } from '../../../util/util';

@Component({
  template: `<nda-select [options]="options" [label]="label"></nda-select>`
})
class TestHostComponent {
  options: Option[];
  label: string;
}

describe('Component: Select', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectComponent, TestHostComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
