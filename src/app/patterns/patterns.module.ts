import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PatternsComponent } from './patterns.component';
import { FormsWrapperComponent } from './wrappers/forms-wrapper/forms-wrapper.component';
import { PatternsRoutingModule } from './routing/patterns-routing.module';

@NgModule({
  imports: [
    SharedModule,
    PatternsRoutingModule
  ],
  declarations: [
    PatternsComponent,
    FormsWrapperComponent
  ],
  entryComponents: [
    FormsWrapperComponent
  ]
})
export class PatternsModule { }
