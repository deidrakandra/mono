import { Component, Input, OnInit } from '@angular/core';

import { Faq, Video } from "../../../help-center.model";
import { collapseExpandAnimation } from "../../../../../animations/collapseExpandAnimation";
import { rotate45Animation } from "../../../../../animations/rotateAnimation";

@Component({
  selector: 'nda-help-panel-faq',
  templateUrl: './help-panel-faq.component.html',
  animations: [collapseExpandAnimation, rotate45Animation]
})
export class HelpPanelFaqComponent implements OnInit {

  @Input() faq: Faq;
  @Input() videoIcon: string;

  collapse: boolean;

  ngOnInit() {
    this.collapse = true;
  }

  get question(): string {
    return this.faq.question;
  }

  get answer(): string {
    return this.faq.answer;
  }

  get video(): Video {
    return this.faq.video;
  }

  get lastPublished(): string {
    return this.faq.lastPublished;
  }

  toggle(event: Event) {
    if (window.getSelection().isCollapsed && !this.isVideo(event.target)) {
      this.collapse = !this.collapse;
    }
  }

  isVideo(target: EventTarget): boolean {
    return target instanceof HTMLVideoElement;
  }
}
