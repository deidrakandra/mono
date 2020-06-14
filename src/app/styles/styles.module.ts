import { NgModule } from '@angular/core';
import { StylesComponent } from './styles.component';
import { ColorSwatchComponent } from "./wrappers/colors/color-swatch/color-swatch.component";
import { TypographyComponent } from "./wrappers/typography/typography.component";
import { ColorsComponent } from "./wrappers/colors/colors.component";
import { ButtonsComponent } from "./wrappers/buttons/buttons.component";
import { SharedModule } from "../shared/shared.module";
import { StylesRoutingModule } from "./routing/styles-routing.module";
import { IconsComponent } from './wrappers/icons/icons.component';
import { SpacingComponent } from './wrappers/spacing/spacing.component';
import { GridComponent } from './wrappers/grid/grid.component';

@NgModule({
  imports: [
    SharedModule,
    StylesRoutingModule
  ],
  exports: [
    StylesComponent
  ],
  declarations: [
    StylesComponent,
    ButtonsComponent,
    ColorSwatchComponent,
    ColorsComponent,
    TypographyComponent,
    IconsComponent,
    SpacingComponent,
    GridComponent,
  ],
  entryComponents: [
    ColorsComponent,
    TypographyComponent,
    ButtonsComponent,
    IconsComponent,
    SpacingComponent,
    GridComponent
  ]
})
export class StylesModule { }
