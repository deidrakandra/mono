import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

import { ParamListComponent } from './param-list.component';
import { Param } from './param/param.model';

@Component({
  template: `<sg-param-list [params]="params"></sg-param-list>`
})
class TestHostComponent {
  params: Param[];
}

describe('ParamListComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  let params = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamListComponent, TestHostComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.params = params;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
