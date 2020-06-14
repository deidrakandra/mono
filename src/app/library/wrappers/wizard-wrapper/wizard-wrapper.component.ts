import { Component, OnInit } from '@angular/core';
import { ContentService, WizardStep } from '@nda/angular';

@Component({
  selector: 'sg-wizard-wrapper',
  templateUrl: './wizard-wrapper.component.html'
})
export class WizardWrapperComponent implements OnInit {

  steps: WizardStep[];

  constructor(
    private content: ContentService
  ) {}

  ngOnInit() {
    this.steps = [
      {
        title: this.content.lookup('page-title.collect'),
        activeIcon: "male",
        index: 1
      },
      {
        title: "?  |  ??",
        activeIcon: "question",
        index: 2
      },
      {
        title: "Profit",
        activeIcon: "money",
        index: 3
      }
    ];
  }
}
