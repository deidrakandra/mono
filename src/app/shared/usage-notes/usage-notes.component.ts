import { Component, Input, OnInit } from '@angular/core';
import { UsageNote } from './usage-note.model';

@Component({
  selector: 'sg-usage-notes',
  templateUrl: './usage-notes.component.html',
  styleUrls: ['./usage-notes.component.scss']
})
export class UsageNotesComponent {

  @Input() note: UsageNote

}
