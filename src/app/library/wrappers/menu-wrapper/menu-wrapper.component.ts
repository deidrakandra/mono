import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@nda/angular';

@Component({
  selector: 'sg-menu-wrapper',
  templateUrl: './menu-wrapper.component.html'
})
export class MenuWrapperComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        anchor: '',
        label: 'Menu Item One'
      },
      {
        href: 'https://angular.io/docs',
        label: 'Angular Docs'
      }
    ];
  }

}
