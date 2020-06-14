import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PatternsGuard } from './patterns.guard';
import { PatternsResolver } from './patterns.resolver';
import { PatternsComponent } from '../patterns.component';
import { DetailComponent } from '../../shared/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: PatternsComponent,
    canActivate: [PatternsGuard],
    children: [
      {
        path: ':detail',
        component: DetailComponent,
        data: {
          type: 'Pattern'
        },
        resolve: {
          config: PatternsResolver
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
    PatternsResolver,
    PatternsGuard
  ]
})
export class PatternsRoutingModule { }

