import { DateValue } from '../controls/datepicker/datepicker.model';

export interface ControlsConfig {
  [p: string]: any;
}

export interface FormValueConfig {
  dateValue?: DateValue;
  flatten?: boolean;
  booleanAsNumber?: boolean;
}
