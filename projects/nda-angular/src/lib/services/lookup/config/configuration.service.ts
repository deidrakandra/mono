import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { LookupService } from "../lookup.service";
import { ServiceConfig } from "../../../module-config";
import { SERVICE_CONFIG } from "../../tokens";
import { Defaults } from "../defaults.enum";

@Injectable()
export class ConfigurationService extends LookupService {

  constructor(
    private httpClient: HttpClient,
    @Inject(SERVICE_CONFIG) private config: ServiceConfig
  ) {
    super(
      httpClient, [
        `${config.host}/${config.configEndpoint}/${Defaults.CONFIGURATION}`,
        `${config.host}/${config.configEndpoint}/${Defaults.VALIDATION}`,
        ...config.configurationIds.map((id: string) => `${config.host}/${config.configEndpoint}/${id}`)
      ]);
  }

}
