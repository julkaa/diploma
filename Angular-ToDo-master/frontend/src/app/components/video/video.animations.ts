import { animate, style, transition, trigger } from '@angular/animations';

export const card = trigger('card', [
  transition('void => *', [
    style({
      opacity: 0,
      marginTop: '-100px',
    }),
    animate('800ms ease-in-out'),
  ]),
]);
