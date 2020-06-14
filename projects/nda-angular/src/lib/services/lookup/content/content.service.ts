import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { LookupService } from "../lookup.service";
import { TemplateService } from "../../template/template.service";
import { ServiceConfig } from "../../../module-config";
import { SERVICE_CONFIG } from "../../tokens";
import { HelpCenter } from "../../../components/help-center/help-center.model";
import { Defaults } from "../defaults.enum";

@Injectable()
export class ContentService extends LookupService {

  constructor(
    private httpClient: HttpClient,
    private template: TemplateService,
    @Inject(SERVICE_CONFIG) private config: ServiceConfig
  ) {
    super(
      httpClient, [
        `${config.host}/${config.dictionaryServiceEndpoint}/${Defaults.CONTENT}`,
        ...config.contentIds.map((id: string) => `${config.host}/${config.dictionaryServiceEndpoint}/${id}`)
      ]);
  }

  onLoadComplete(data: any) {
    this.template.load(data.template);
  }

  lookupHelpCenter(key: string): HelpCenter {
    return this.lookupObject(`help.${key}`);
  }
}
