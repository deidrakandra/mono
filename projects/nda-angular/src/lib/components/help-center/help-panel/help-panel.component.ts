import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { HelpCenter } from "../help-center.model";
import { ContentService } from "../../../services/lookup/content/content.service";
import { rightSlideAnimation } from "../../../animations/slideAnimation";

@Component({
  selector: 'nda-help-panel',
  templateUrl: './help-panel.component.html',
  styleUrls: ['./help-panel.component.scss'],
  animations: [rightSlideAnimation]
})
export class HelpPanelComponent implements OnInit, OnChanges {

  @Input() activeRoute: string;
  @Input() displayHelp: boolean;
  @Output() closeHelp = new EventEmitter<boolean>();

  helpCenter: HelpCenter;
  helpContentEl: Element;

  constructor(
    private content: ContentService
  ) { }

  ngOnInit() {
    this.helpContentEl = document.getElementsByClassName('help-content')[0];
  }

  ngOnChanges() {
    this.scrollToTop();
    this.helpCenter = this.content.lookupHelpCenter(this.activeRoute);
  }

  close() {
    this.closeHelp.emit(true);
  }

  scrollToTop() {
    if (this.helpContentEl) {
      this.helpContentEl.scrollTop = 0;
    }
  }
}
