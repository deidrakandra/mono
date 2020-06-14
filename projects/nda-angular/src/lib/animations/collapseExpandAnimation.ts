import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from "@angular/animations";

// collapsed div needs .collapsible class for this to work -- hides overflow, mimicking display: none
export const collapseExpandAnimation =
  trigger('collapseExpand', [
    state('true', style({
      opacity: 0,
      height: 0,
    })),
    state('false', style({
      opacity: 1,
      height: '*',
    })),
    transition('true => false', animate('250ms ease-out')),
    transition('false => true', animate('250ms ease-in'))
  ]);

