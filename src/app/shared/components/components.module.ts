// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MATERIAL IMPORTS
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// COMPONENTS
import { ItemComponent } from './item/item.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToastyComponent } from './toasty/toasty.component';
import { ToastyListComponent } from './toasty-list/toasty-list.component';

// DIRECTIVES
import { ResizeDirective } from '../directives/resize.directive';

// MODULES
import { PipesModule } from '../pipes/pipes.module';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
];

const COMPONENTS = [
  ButtonComponent,
  InputComponent,
  SpinnerComponent,
  ItemComponent,
  ToastyComponent,
  ToastyListComponent,
];

const DIRECTIVES = [
  ResizeDirective
];

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  PipesModule,
];

@NgModule({
  imports: [
    ...MODULES,
    ...MATERIAL_MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...MATERIAL_MODULES
  ],
  declarations: [
    ...COMPONENTS, 
    ...DIRECTIVES
  ],
})
export class ComponentsModule {}