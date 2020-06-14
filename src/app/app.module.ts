import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SharedModule } from "./shared/shared.module";
import { RoutingModule } from "./routing/routing.module";
import { CoreModule } from "./core/core.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    RoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
