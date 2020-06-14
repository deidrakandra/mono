export interface Selectable {
  value: number;
  selected: boolean;
}

export interface Date {
  month: number;
  date: number;
  year: number;
}

export interface Month extends Selectable {
  month: string;
}

export interface Day extends Selectable {
  disabled: boolean;
}

export interface Year extends Selectable {
  disabled: boolean;
}
