import { NgModule } from '@angular/core';
import { NdaModule } from "@nda/angular";

import { environment } from "../../environments/environment";
import { VERSION_INFO } from "../../environments/version-info";

@NgModule({
  imports: [
    NdaModule.forRoot({
      serviceConfig: {
        host: environment.host,
        dictionaryServiceEndpoint: environment.dictionaryServiceEndpoint,
        configEndpoint: environment.configEndpoint,
        configurationIds: environment.configurationIds,
        contentIds: environment.contentIds
      },
      appConfig: {
        version: VERSION_INFO.app,
        hash: VERSION_INFO.hash
      }
    }),
  ]
})
export class CoreModule { }
