import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from '@angular/platform-browser';

import { MenuItemComponent } from './menu-item.component';
import { MenuItem } from '../../components';

@Component({
  template: `<nda-menu-item [menuItem]="menuItem" (activate)="selected($event)"></nda-menu-item>`
})
class TestHostComponent {
  menuItem: MenuItem;
  selected = jasmine.createSpy('selectedSpy');
}

describe('Component: MenuItem', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let anchor: HTMLAnchorElement;
  const menuItem = { label: 'Styles' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemComponent, TestHostComponent ],
      imports: [ RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    component.menuItem = menuItem;
    fixture.detectChanges();
    anchor = fixture.debugElement.query(By.css('a')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display label', () => {
    expect(anchor.innerText).toContain(menuItem.label);
    expect(anchor.classList).not.toContain('selected');
  });

  it('should not be selected by default', () => {
    expect(anchor.classList).not.toContain('selected');
  });

  it('should activate on click', () => {
    anchor.click();
    fixture.detectChanges();

    expect(component.selected).toHaveBeenCalled();
    expect(anchor.classList).toContain('selected');
  }); 

});
