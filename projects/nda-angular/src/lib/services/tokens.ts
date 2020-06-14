import { InjectionToken } from "@angular/core";

export const SERVICE_CONFIG = new InjectionToken<any[]>(
  'nda/angular: Service Configuration'
);

export const APP_CONFIG = new InjectionToken<any[]>(
  'nda/angular: App Configuration'
);
