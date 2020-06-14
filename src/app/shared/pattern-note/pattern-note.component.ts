import { Component, Input } from '@angular/core';
import { PatternNote } from './pattern-note.model';

@Component({
  selector: 'sg-pattern-note',
  templateUrl: './pattern-note.component.html',
  styleUrls: ['./pattern-note.component.scss']
})
export class PatternNoteComponent {

  @Input() note: PatternNote;

}
