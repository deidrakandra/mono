import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from "@angular/animations";

export const rightSlideAnimation =
  trigger('rightSlide', [
    state('true', style({
      right: '1px',
    })),

    state('false', style({
      right: '-800px',
    })),

    transition('true => false', animate('500ms ease-out')),
    transition('false => true', animate('500ms ease-in'))
  ]);


export const downSlideAnimation =
  trigger('downSlide', [
    state('true', style({
      bottom: '-50px',
    })),

    state('false', style({
      bottom: '10px',
    })),

    transition('true => false', animate('400ms ease-out')),
    transition('false => true', animate('500ms ease-in'))
  ]);


export const topSlideAnimation =
  trigger('topSlide', [
    state('true', style({
      top: '-50px',
    })),

    state('false', style({
      top: '15px',
    })),

    transition('true => false', animate('400ms ease-out')),
    transition('false => true', animate('500ms ease-in'))
  ]);


export const bottomUpAnimation =
  trigger('bottomUp', [
    state('true', style({
      bottom: '15px'
    })),

    state('false', style({
      bottom: '-50px'
    })),

    transition('true => false', animate('300ms ease-out')),
    transition('false => true', animate('350ms ease-in')),
  ]);