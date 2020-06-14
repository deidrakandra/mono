import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectivesResolver } from './directives.resolver';
import { DirectivesComponent } from '../directives.component';
import { DirectivesGuard } from './directives.guard';
import { DetailComponent } from '../../shared/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: DirectivesComponent,
    canActivate: [ DirectivesGuard ],
    children: [
      {
        path: ':detail',
        component: DetailComponent,
        data: {
          type: 'Type'
        },
        resolve: {
          config: DirectivesResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DirectivesResolver,
    DirectivesGuard
  ]
})
export class DirectivesRoutingModule { }