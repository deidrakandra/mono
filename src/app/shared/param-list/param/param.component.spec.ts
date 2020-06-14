import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamComponent } from './param.component';
import { Component } from '@angular/core';
import { Param } from './param.model';

@Component({
  template: `<sg-param [param]="param"></sg-param>`
})
class TestHostComponent {
  param: Param;
}

describe('ParamComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  let param = { };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.param = param;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
