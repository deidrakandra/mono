import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DirectivesComponent } from './directives.component';
import { DirectivesRoutingModule } from './routing/directives-routing.module';
import { ContentWrapperComponent } from './wrappers/content-wrapper/content-wrapper.component';
import { CountWrapperComponent } from './wrappers/count-wrapper/count-wrapper.component';
import { EllipsisWrapperComponent } from './wrappers/ellipsis-wrapper/ellipsis-wrapper.component';
import { FocusWrapperComponent } from './wrappers/focus-wrapper/focus-wrapper.component';

@NgModule({
  imports: [
    SharedModule,
    DirectivesRoutingModule
  ],
  declarations: [
    DirectivesComponent,
    ContentWrapperComponent,
    CountWrapperComponent,
    EllipsisWrapperComponent,
    FocusWrapperComponent,
  ],
  entryComponents: [
    ContentWrapperComponent,
    CountWrapperComponent,
    EllipsisWrapperComponent,
    FocusWrapperComponent
  ]
})
export class DirectivesModule { }
