import { Type } from "@angular/core";
import { ColorsComponent } from "../wrappers/colors/colors.component";
import { TypographyComponent } from "../wrappers/typography/typography.component";
import { ButtonsComponent } from "../wrappers/buttons/buttons.component";
import { IconsComponent } from '../wrappers/icons/icons.component';
import { SpacingComponent } from '../wrappers/spacing/spacing.component';
import { GridComponent } from '../wrappers/grid/grid.component';

export interface SectionConfig {
  id: string;
  title: string;
  component?: Type<any>
}

export const stylesConfiguration = [
  {
    id: 'anchor-typo',
    title: 'Typography',
    component: TypographyComponent
  },
  {
    id: 'anchor-icons',
    title: 'Icons',
    component: IconsComponent
  },
  {
    id: 'anchor-colors',
    title: 'Colors',
    component: ColorsComponent
  },
  {
    id: 'anchor-buttons',
    title: 'Buttons',
    component: ButtonsComponent
  },
  {
    id: 'anchor-spacing',
    title: 'Spacing',
    component: SpacingComponent
  },
  {
    id: 'anchor-grid',
    title: 'Grid',
    component: GridComponent
  }
];
