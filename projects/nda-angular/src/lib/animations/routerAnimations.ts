import {trigger, animate, style, query, transition, AnimationTriggerMetadata} from '@angular/animations';

export const routerTransition =
  trigger('routerTransition', [
    transition('* <=> *', [
      // Initial state of new route
      query(':enter',
        style({
          opacity: 0
          // position: 'fixed',
          // width:'100%',
          // transform: 'translateX(-100%)'
        }),
        {optional:true}),

      // move page off screen right on leave
      query(':leave',
        animate('50ms ease',
          style({
            opacity: 0
            // position: 'fixed',
            // width:'100%',
            // transform: 'translateX(100%)'
          })
        ),
        {optional:true}),

      // move page in screen from left to right
      query(':enter',
        animate('200ms ease',
          style({
            opacity: 1,
            // transform: 'translateX(0%)'
          })
        ),
        {optional:true}),
    ])
  ]);