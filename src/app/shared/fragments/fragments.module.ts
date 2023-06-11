// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULES
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

// FRAGMENTS
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';

const MODULES = [
  CommonModule,
  ComponentsModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  PipesModule,
];

const FRAGMENTS = [
  ListComponent,
  TableComponent,
  HeaderComponent,
  FooterComponent,
  ProfileComponent
]; 

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...FRAGMENTS
  ],
  declarations: [
    ...FRAGMENTS
  ],
})
export class FragmentsModule {}