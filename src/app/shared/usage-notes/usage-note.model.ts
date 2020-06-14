import { Param } from '../param-list/param/param.model';

export interface UsageNote {
  inputs: Param[],
  outputs: Param[],
  example: string,
  notes: string[]
}