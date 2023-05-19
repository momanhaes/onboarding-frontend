import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: CustomerListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
