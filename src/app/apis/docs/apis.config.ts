import { Api } from '../../shared/api-docs/api-doc.model';
import { configApi } from './config.api';
import { ipcApi } from './ipc.api';
import { validationApi } from './validation.api';
import { validatorsApi } from './validators.api';

export const apisConfig: { [id:string] : Api } = {
  'config' : configApi,
  'ipc' : ipcApi,
  'validation': validationApi,
  'validators': validatorsApi
};