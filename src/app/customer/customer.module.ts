// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULES
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { CustomerRoutingModule } from './customer-routing.module';

// PAGES
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';

const MODULES = [
  CustomerRoutingModule,
  SharedModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  PipesModule,
];

const PAGES = [
  CustomerComponent,
  CustomerListComponent,
  CustomerRegisterComponent,
]

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...PAGES,
  ],
})
export class CustomerModule {}
