import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApisResolver } from './apis.resolver';
import { ApisComponent } from '../apis.component';
import { ApisGuard } from './apis.guard';
import { ApiDocsComponent } from '../../shared/api-docs/api-docs.component';

const routes: Routes = [
  {
    path: '',
    component: ApisComponent,
    canActivate: [ ApisGuard ],
    children: [
      {
        path: ':detail',
        component: ApiDocsComponent,
        data: {
          type: 'API'
        },
        resolve: {
          config: ApisResolver
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
    ApisResolver,
    ApisGuard
  ]
})
export class ApisRoutingModule { }
