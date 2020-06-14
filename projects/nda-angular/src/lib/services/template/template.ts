import { MenuItem } from '../../components/components';
import { Link } from '../../components/link/link.model';

export interface Template {
  footer: Link[];
  mainMenu?: MenuItem[];
  nda: Link;
  tophat?: Link[];
}