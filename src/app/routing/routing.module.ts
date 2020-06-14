import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'styles',
    loadChildren: () => import('../styles/styles.module').then(m => m.StylesModule)
  },
  {
    path: 'components',
    loadChildren: () => import('../library/library.module').then(m => m.LibraryModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('../directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: 'apis',
    loadChildren: () => import('../apis/apis.module').then(m => m.ApisModule)
  },
  {
    path: 'patterns',
    loadChildren: () => import('../patterns/patterns.module').then(m => m.PatternsModule)
  },
  {
    path: 'installation',
    loadChildren: () => import('../installation/installation.module').then(m => m.InstallationModule)
  },
  { path : '**', redirectTo : 'styles' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
