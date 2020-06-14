import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusDirective } from './focus.directive';

@Component({
  template: `
      <input type="checkbox" #test formControlName="test_ind"><label class="checkbox-label">Focus Number</label>
      <input [focusOn]="test.checked" type="number" formControlName="test_input">
  `
})
class TestHostComponent { }

describe('Directive: Focus', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, FocusDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = fixture.debugElement.query(By.directive(FocusDirective));

    expect(directive).toBeTruthy();
  });

  it('should display content based on key', () => {
    const cb: HTMLElement = fixture.debugElement.query(By.css('input[type="checkbox"]')).nativeElement;
    const input: HTMLElement = fixture.debugElement.query(By.css('input[type="number"]')).nativeElement;

    cb.click();
    fixture.detectChanges();

    setTimeout(() => {
      expect(document.activeElement.getAttribute('type')).toBe(input.getAttribute('type'));
    }, 10);
  });
});
