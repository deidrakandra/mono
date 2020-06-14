import { Component, Input, OnInit } from '@angular/core';
import { Glossary } from "../../../help-center.model";
import { collapseExpandAnimation } from "../../../../../animations/collapseExpandAnimation";
import { rotate45Animation } from "../../../../../animations/rotateAnimation";

@Component({
  selector: 'nda-help-panel-glossary',
  templateUrl: './help-panel-glossary.component.html',
  animations: [collapseExpandAnimation, rotate45Animation]
})
export class HelpPanelGlossaryComponent implements OnInit {

  @Input() glossaryTerm: Glossary;

  collapse: boolean;

  ngOnInit() {
    this.collapse = true;
  }

  get term(): string {
    return this.glossaryTerm.term;
  }

  get definition(): string {
    return this.glossaryTerm.definition;
  }

  get lastPublished(): string {
    return this.glossaryTerm.lastPublished;
  }

  toggle() {
    if (window.getSelection().isCollapsed) {
      this.collapse = !this.collapse;
    }
  }
}
