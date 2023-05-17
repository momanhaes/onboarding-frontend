import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
