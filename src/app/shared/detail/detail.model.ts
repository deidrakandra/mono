import { Type } from '@angular/core';

import { UsageNote } from '../usage-notes/usage-note.model';
import { PatternNote } from '../pattern-note/pattern-note.model';

export interface Detail {
  id: string,
  title: string,
  component?: Type<any>,
  notes?: UsageNote,
  patternNotes?: PatternNote
}