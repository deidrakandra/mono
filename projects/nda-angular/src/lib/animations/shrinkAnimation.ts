import { animate, animateChild, query, state, style, transition, trigger, AnimationTriggerMetadata } from "@angular/animations";

//showStatus
export const fileCenterAnimation =
  trigger('fileCenter', [
    transition('false => true', [
      query('@shrink', [
        animateChild()
      ]),
      query('@grow', [
        animateChild()
      ]),
      query('@fade', [
        animateChild()
      ])
    ])
  ]);

export const shrinkAnimation =
  trigger('shrink', [
    state('false', style({
      width: '87.66%'
    })),
    state('true', style({
      width: '37.66%'
    })),
    transition('false => true', animate('250ms ease-in'))
  ]);

export const growAnimation =
  trigger('grow', [
    state('false', style({
      width: 0,
    })),
    state('true', style({
      width: '54.33%',
    })),
    transition('false => true', animate('100ms'))
  ]);

export const fadeAnimation =
  trigger('fade', [
    state('false', style({
      opacity: 0,
    })),
    state('true', style({
      opacity: 1,
    })),
    transition('false => true', animate('250ms ease-in'))
  ]);
