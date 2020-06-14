export interface ModuleConfig {
  serviceConfig: ServiceConfig;
  appConfig: AppConfig;
}

export interface ServiceConfig {
  host: string;
  contentIds?: string[];
  configurationIds?: string[];
  dictionaryServiceEndpoint: string;
  configEndpoint: string;
}

export interface AppConfig {
  version: string;
  hash: string;
}
