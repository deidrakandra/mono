import { Component, EventEmitter, Input, Output } from '@angular/core';
import { topSlideAnimation } from "../../../animations/slideAnimation";

@Component({
  selector: 'nda-help-button',
  templateUrl: './help-button.component.html',
  styleUrls: ['./help-button.component.scss'],
  animations: [topSlideAnimation]
})
export class HelpButtonComponent {

  @Input() displayHelp: boolean;
  @Output() openHelp = new EventEmitter<boolean>();

  open() {
    this.openHelp.emit(true);
  }
}
