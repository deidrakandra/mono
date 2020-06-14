import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { templateFixture } from '../../test/test.fixture';
import { LinkComponent } from './link.component';
import { TargetType } from './target-type';
import { Link } from './link.model';

@Component({
  template: `<nda-link [link]="item" [target]="target"></nda-link>`
})
class TestHostComponent {
  item: Link;
  target: string;
}

describe('Component: Link', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [TestHostComponent, LinkComponent]
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

  it('should display values', () => {
    const menuItem = templateFixture.footer[0];
    const targetType = TargetType.NEW_TAB;

    component.item = menuItem;
    component.target = targetType;
    fixture.detectChanges();

    const menuItemAnchor: HTMLAnchorElement = fixture.debugElement.query(By.css('a')).nativeElement;

    expect(menuItemAnchor.href).toContain(menuItem.url);
    expect(menuItemAnchor.title).toBe(menuItem.title);
    expect(menuItemAnchor.innerText).toBe(menuItem.name);
    expect(menuItemAnchor.target).toBe(targetType);
  });

});