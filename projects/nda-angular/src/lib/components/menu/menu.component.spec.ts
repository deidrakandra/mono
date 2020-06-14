import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { MenuComponent } from './menu.component';
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { MenuItem } from './menu-item/menu-item.model';

@Component({
  template: `<nda-menu [menuItems]="menuItems" [left]="left" [sticky]="sticky" [horizontal]="horizontal"></nda-menu>`
})
class TestHostComponent {
  menuItems: MenuItem[];
  left: boolean;
  sticky: boolean;
  horizontal: boolean;
}

describe('Component: Menu', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let container: HTMLElement;

  const menuItems: MenuItem[] = [
    { label: 'Styles', routerLink: ['/styles'], },
    { label: 'Components', routerLink: ['/components'] },
    { label: 'Installation Guide', routerLink: ['/installation'] },
    { label: 'Google', href: 'https://google.com'},
    { label: 'Empty'},
    { label: 'Local'},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent, MenuItemComponent, TestHostComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.menuItems = menuItems;
    fixture.detectChanges();
    container = fixture.debugElement.query(By.css('.menu-container')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('default values', () => {
    it('should display vertically by default', () => {
      expect(container.classList).not.toContain('horizontal');
    });

    it('should display right by default', () => {
      expect(container.classList).not.toContain('left');
    });

    it('should not be sticky by default', () => {
      expect(container.classList).not.toContain('sticky');
    });
  });

  describe('configurable settings', () => {
    it('should display horizontally', () => {
      component.horizontal = true;
      fixture.detectChanges();

      expect(container.classList).toContain('horizontal');
    });

    it('should display left', () => {
      component.left = true;
      fixture.detectChanges();

      expect(container.classList).toContain('left');
    });

    it('should be sticky', () => {
      component.sticky = true;
      fixture.detectChanges();

      expect(container.classList).toContain('sticky');
    });
  });

  describe('menu items', () => {
    it('should display all the menu items', () => {
      const menuItemComps = fixture.debugElement.queryAll(By.directive(MenuItemComponent));

      expect(menuItemComps.length).toBe(menuItems.length);
    });

    it('should indicate selected menu item', () => {
      const menuItemComps: DebugElement[] = fixture.debugElement.queryAll(By.directive(MenuItemComponent));
      const menuItemAnchor = menuItemComps[4].query(By.css('a')).nativeElement;

      menuItemAnchor.click();
      fixture.detectChanges();

      expect(menuItemAnchor.classList).toContain('selected');
    });

    it('should change selected menu item when new item is clicked', () => {
      const submenu: MenuComponent = fixture.debugElement.query(By.directive(MenuComponent)).componentInstance;
      const menuItemComps: DebugElement[] = fixture.debugElement.queryAll(By.directive(MenuItemComponent));
      const firstItemAnchor = menuItemComps[4].query(By.css('a')).nativeElement;
      const secondItem = menuItemComps[5];
      const secondItemAnchor = secondItem.query(By.css('a')).nativeElement;

      firstItemAnchor.click();
      fixture.detectChanges();

      expect(firstItemAnchor.classList).toContain('selected');

      secondItemAnchor.click();
      submenu.selected(secondItem.componentInstance);
      fixture.detectChanges();

      expect(secondItemAnchor.classList).toContain('selected');
      expect(firstItemAnchor.classList).not.toContain('selected');
    });
  });

});
