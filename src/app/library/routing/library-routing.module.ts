import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LibraryComponent } from "../library.component";
import { LibraryResolver } from './library.resolver';
import { LibraryGuard } from './library.guard';
import { DetailComponent } from '../../shared/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    canActivate: [ LibraryGuard ],
    children: [
      {
        path: ':detail',
        component: DetailComponent,
        data: {
          type: 'Component'
        },
        resolve: {
          config: LibraryResolver
        },
        children: [
          {
            path: 'landing',
            outlet: 'wizard',
            data: {
              route: 'landing',
              index: 0
            }
          },
          {
            path: 'collect',
            outlet: 'wizard',
            data: {
              route: 'collect',
              index: 1
            }
          },
          {
            path: 'question',
            outlet: 'wizard',
            data: {
              route: 'question',
              index: 2
            }
          },
          {
            path: 'double-question',
            outlet: 'wizard',
            data: {
              route: 'double-question',
              index: 2
            }
          },
          {
            path: 'profit',
            outlet: 'wizard',
            data: {
              route: 'profit',
              index: 3
            }
          },
          {
            path: 'complete',
            outlet: 'wizard',
            data: {
              route: 'complete',
              index: 4
            }
          },

        ]
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LibraryResolver,
    LibraryGuard
  ]
})
export class LibraryRoutingModule { }