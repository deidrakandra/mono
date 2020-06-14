export interface PatternNote {
  pattern: Pattern[];
  notes: string[]
}

interface Pattern {
  title: string;
  example?: string;
  notes: string[];
}