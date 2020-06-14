import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";

import { InstallationComponent } from './installation.component';
import { InstallationRoutingModule } from "./routing/installation-routing.module";

@NgModule({
  imports: [
    SharedModule,
    InstallationRoutingModule
  ],
  declarations: [
    InstallationComponent
  ]
})
export class InstallationModule { }
