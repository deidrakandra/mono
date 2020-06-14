import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ApisRoutingModule } from './routing/apis-routing.module';
import { ApisComponent } from './apis.component';

@NgModule({
  imports: [
    SharedModule,
    ApisRoutingModule
  ],
  declarations: [
    ApisComponent
  ]
})
export class ApisModule { }
