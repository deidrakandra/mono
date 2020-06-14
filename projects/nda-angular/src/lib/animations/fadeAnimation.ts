import { animate, query, stagger, style, transition, trigger, AnimationTriggerMetadata } from "@angular/animations";

export const fadeAnimation =
  trigger('fadeInOut', [
    transition(':enter', [
      style({opacity: 0}),
      animate(500, style({opacity: 1}))
    ]),
    transition(':leave', [
      animate(500, style({opacity: 0}))
    ])
  ]);

export const fadeFastAnimation =
  trigger('fadeInOutFast', [
    transition(':enter', [
      style({opacity: 0}),
      animate(100, style({opacity: 1}))
    ]),
    transition(':leave', [
      animate(50, style({opacity: 0}))
    ])
  ]);


export const fadeInAnimation =
  trigger('fadeIn', [
    transition(':enter', [
      style({opacity: 0}),
      animate(150, style({opacity: 1}))
    ])
  ]);

export const fadeInSlideOutAnimation =
  trigger('fadeInSlideOut', [
    transition(':enter', [
      style({opacity: 0}),
      animate(250, style({opacity: 1}))
    ]),
    transition(':leave', [
      animate(250, style({ height: 0, opacity: 0}))
    ])
  ]);

export const slideOutAnimation =
  trigger('slideOut', [
    transition(':leave', [
      animate(250, style({ height: 0, opacity: 0}))
    ])
  ]);

export const fadeInListAnimation =
  trigger('fadeInList', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(100, [
          animate('0.25s', style({ opacity: 0 }))
        ])
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('.5s', style({ opacity: 1 }))
        ])
      ], { optional: true })
    ])
  ]);