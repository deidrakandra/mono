import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, NgModule, Type } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ComponentHostDirective } from './component-host.directive';

@Component({
  template: `<span>Test Component {{ data }}</span>`
})
class TestMockComponent {
  @Input() data: string;
}

@Component({
  template: `<div [nda-component-host]="component" [config]="config"></div>`
})
class TestHostComponent {
  component: Type<any> = TestMockComponent;
  config: {};
}

@NgModule({
  declarations: [TestMockComponent],
  entryComponents: [TestMockComponent]
})
class TestModule { }

describe('Directive: ComponentHost', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let directive: ComponentHostDirective;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentHostDirective, TestHostComponent],
      imports: [TestModule],
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    directive = fixture.debugElement.query(By.directive(ComponentHostDirective)).injector.get(ComponentHostDirective);
    directive.loadComponent();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should load component', () => {
    const span: HTMLElement = fixture.debugElement.query(By.css('span')).nativeElement;

    expect(span.innerText).toContain('Test Component');
  });

  it('should set input data', () => {
    const config = { data: 'input data' };
    component.config = config;
    fixture.detectChanges();

    const span: HTMLElement = fixture.debugElement.query(By.css('span')).nativeElement;

    expect(span.innerText).toContain(`Test Component ${config.data}`);
  });
});
