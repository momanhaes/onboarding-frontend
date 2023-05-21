import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';

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
      {
        path: 'register',
        component: CustomerRegisterComponent,
      },
      {
        path: 'register/:id',
        component: CustomerRegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
