export interface WizardStep {
  title: string;
  index: number;
  activeIcon: string;
  futureIcon?: string;
}

export interface StepState {
  icon: string;
  active: boolean;
  complete: boolean;
}