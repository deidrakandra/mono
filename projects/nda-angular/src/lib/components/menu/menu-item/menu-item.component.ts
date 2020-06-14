import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { MenuItem } from "./menu-item.model";

@Component({
  selector: 'nda-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() activate = new EventEmitter<MenuItemComponent>();

  active: boolean = false;

  constructor(
    private router: Router
  ) {
    router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => this.setActive() );
  }

  ngOnInit() {
    this.setActive();
  }

  private setActive() {
    if (this.menuItem.routerLink) {
      const last = this.menuItem.routerLink[this.menuItem.routerLink.length - 1];
      this.active = this.router.routerState.snapshot.url.indexOf(last) > - 1;
    }
  }

  navigate(event: Event) {
    event.stopPropagation();

    this.active = true;
    this.activate.emit(this);
    if (this.menuItem.anchor) {
      document
        .getElementById(this.menuItem.anchor)
        .scrollIntoView({ behavior: 'smooth', block: 'start'});
    } else if (this.menuItem.routerLink) {
      this.router.navigate(this.menuItem.routerLink);
    } else if (this.menuItem.href) {
      window.location.href = this.menuItem.href;
    }
  }

  deselect() {
    this.active = false;
  }

  get label(): string {
    return this.menuItem.label;
  }

}
