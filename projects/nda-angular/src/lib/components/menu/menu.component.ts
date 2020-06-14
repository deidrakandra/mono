import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { MenuItem } from "./menu-item/menu-item.model";
import { MenuItemComponent } from "./menu-item/menu-item.component";

@Component({
  selector: 'nda-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  @ViewChildren(MenuItemComponent) components: QueryList<MenuItemComponent>;

  @Input() menuItems: MenuItem[];
  @Input() left: boolean = false;
  @Input() sticky: boolean = false;
  @Input() horizontal: boolean = false;

  selected(component: MenuItemComponent) {
    this.components
      .filter((menuComponent: MenuItemComponent) => menuComponent.menuItem !== component.menuItem && menuComponent.active)
      .forEach((menuItem: MenuItemComponent) => menuItem.deselect());
  }
}