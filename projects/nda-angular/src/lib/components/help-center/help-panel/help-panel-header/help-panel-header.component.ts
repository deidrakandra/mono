import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nda-help-panel-header',
  templateUrl: './help-panel-header.component.html',
  styleUrls: ['./help-panel-header.component.scss']
})
export class HelpPanelHeaderComponent {

  @Output() closeHelp = new EventEmitter<boolean>();

  close() {
    this.closeHelp.emit(true);
  }
}
