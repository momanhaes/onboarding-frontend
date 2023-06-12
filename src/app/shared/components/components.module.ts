// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MATERIAL IMPORTS
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// COMPONENTS
import { CepComponent } from './cep/cep.component';
import { ItemComponent } from './item/item.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { ToastyComponent } from './toasty/toasty.component';
import { DialogComponent } from './dialog/dialog.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToastyListComponent } from './toasty-list/toasty-list.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

// DIRECTIVES
import { ResizeDirective } from '../directives/resize.directive';

// MODULES
import { PipesModule } from '../pipes/pipes.module';
import { NgxMaskModule } from 'ngx-mask';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatTabsModule,
  MatSelectModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatBottomSheetModule,
];

const COMPONENTS = [
  ButtonComponent,
  InputComponent,
  SpinnerComponent,
  ItemComponent,
  ToastyComponent,
  DialogComponent,
  CepComponent,
  ToastyListComponent,
  BottomSheetComponent
];

const DIRECTIVES = [
  ResizeDirective
];

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  HttpClientModule,
  PipesModule,
  NgxMaskModule.forRoot()
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