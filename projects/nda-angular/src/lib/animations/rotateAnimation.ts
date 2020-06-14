import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from "@angular/animations";

export const rotate45Animation =
  trigger('rotate45', [
    state('true', style({
      transform: 'rotate(0deg) scale(1)'
    })),
    state('false', style({
      transform: 'rotate(45deg) scale(1.5)'
    })),
    transition('true => false', animate('300ms ease-out')),
    transition('false => true', animate('300ms ease-in'))
  ]);

export const rotate90Animation =
  trigger('rotate90', [
    state('true', style({
      transform: 'rotate(0deg)'

})),
    state('false', style({
      transform: 'rotate(90deg)'
    })),
    transition('true => false', animate('300ms ease-out')),
    transition('false => true', animate('150ms ease-in'))
  ]);
