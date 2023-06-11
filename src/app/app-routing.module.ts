import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitHubSearchComponent } from './gh-search/gh-search.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'gh-search',
    component: GitHubSearchComponent,
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then((x) => x.CustomerModule),
  },
  {
    path: 'styleguide',
    loadChildren: () => import('./styleguide/styleguide.module').then((m) => m.StyleguideModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
