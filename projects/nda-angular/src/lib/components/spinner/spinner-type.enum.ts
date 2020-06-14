import { ConfigKey } from "../../services/lookup/config/config-key.enum";

export enum SpinnerType {
  LARGE = 'large',
  SMALL = 'small'
}

export enum SpinnerSize {
  SMALL = 'small',
  DEFAULT = 'default',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export interface SpinnerConfig {
  animationKey: string;
  spinnerSize: SpinnerSize
  containerClass: string;
}

export const SpinnerConfigurations = {
  [SpinnerType.LARGE] : {
    animationKey: ConfigKey.LG_SPINNER,
    spinnerSize: SpinnerSize.DEFAULT,
    containerClass: 'large-spinner-container'
  },
  [SpinnerType.SMALL] : {
    animationKey: ConfigKey.SM_SPINNER,
    spinnerSize: SpinnerSize.SMALL,
    containerClass: 'small-spinner-container'
  }
};