// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULES
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { StyleguideRoutingModule } from './styleguide-routing.module';

// PAGES
import { TypographyPageComponent } from './typography-page/typography-page.component';
import { ColorsPageComponent } from './colors-page/colors-page.component';
import { InputsPageComponent } from './inputs-page/inputs-page.component';
import { ButtonsPageComponent } from './buttons-page/buttons-page.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { IconsPageComponent } from './icons-page/icons-page.component';
import { PipesPageComponent } from './pipes-page/pipes-page.component';
import { StyleguideComponent } from './styleguide.component';

// SERVICES
import { StyleguideService } from './styleguide.service';

const MODULES = [
  StyleguideRoutingModule,
  SharedModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  PipesModule
];

const PAGES = [
  StyleguideComponent,
  TypographyPageComponent,
  ColorsPageComponent,
  InputsPageComponent,
  ButtonsPageComponent,
  ItemsPageComponent,
  IconsPageComponent,
  PipesPageComponent
];

const SERVICES = [
  StyleguideService
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...PAGES
  ],
  providers: [
    ...SERVICES
  ]
})
export class StyleguideModule {}
