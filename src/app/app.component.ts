import { Component, OnInit } from '@angular/core';

import { MenuItem } from '@nda/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;
  pageItems: MenuItem[];


  ngOnInit() {
    this.title = 'NDA Style Guide';
    this.pageItems = [
      {
        label: 'Styles',
        routerLink: ['/styles'],
      },
      {
        label: 'Components',
        routerLink: ['/components']
      },
      {
        label: 'Directives/Pipes',
        routerLink: ['/directives']
      },
      {
        label: 'APIs',
        routerLink: ['/apis']
      },
      {
        label: 'Patterns',
        routerLink: ['/patterns']
      },
      {
        label: 'Installation Guide',
        routerLink: ['/installation']
      }
    ];
  }
}
