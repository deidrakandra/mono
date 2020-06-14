import { MenuWrapperComponent } from '../wrappers/menu-wrapper/menu-wrapper.component';
import { Detail } from '../../shared/detail/detail.model';

export const menuDetail: Detail = {
  id: 'menu',
  title: 'Menu',
  component: MenuWrapperComponent,
  notes: {
    inputs: [
      {
        param: `menuItems: MenuItem[]`,
        desc: `Ordered array of <code class="highlight">MenuItem</code>s. See notes for <code class="highlight">MenuItem</code> interface details.`
      },
      {
        param: `left: boolean`,
        desc: `Specifies text justification and border orientation. Default is <code class="highlight">false</code>.`
      },
      {
        param: `horizontal: boolean`,
        desc: `Specifies orientation of menu. Horizontal is for main navigation while vertical is for submenus. Default is <code class="highlight">false</code>`
      }
    ],
    outputs: [],
    example: `<nda-menu [horizontal]="true" [menuItems]="items"></nda-menu>
  
<nda-menu [menuItems]="items"></nda-menu>
  
<nda-menu [left]="true" [menuItems]="items"></nda-menu>`,
    notes: [
      `<code class="format">export interface MenuItem {
    href?: string;
    routerLink?: string[];
    anchor?: string;
    selected?: boolean;
    label: string;
}</code>`
    ]
  }
};