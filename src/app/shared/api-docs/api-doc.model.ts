import { Param } from '../param-list/param/param.model';

export interface Api {
  id: string;
  title: string;
  header?: string;
  desc?: string;
  docs: ApiDoc[];
}

export interface ApiDoc {
  method: string;
  desc: string;
  params: Param[];
  returns: string;
  notes: string[];
}