import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TypographyPageComponent } from './typography-page/typography-page.component';
import { ColorsPageComponent } from './colors-page/colors-page.component';
import { InputsPageComponent } from './inputs-page/inputs-page.component';
import { ButtonsPageComponent } from './buttons-page/buttons-page.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { IconsPageComponent } from './icons-page/icons-page.component';
import { PipesPageComponent } from './pipes-page/pipes-page.component';
import { StyleguideComponent } from './styleguide.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: StyleguideComponent,
    children: [
      {
        path: '',
        redirectTo: 'typography',
        pathMatch: 'full',
      },
      {
        path: 'typography',
        component: TypographyPageComponent,
      },
      {
        path: 'colors',
        component: ColorsPageComponent,
      },
      {
        path: 'inputs',
        component: InputsPageComponent,
      },
      {
        path: 'buttons',
        component: ButtonsPageComponent,
      },
      {
        path: 'items',
        component: ItemsPageComponent,
      },
      {
        path: 'icons',
        component: IconsPageComponent,
      },
      {
        path: 'pipes',
        component: PipesPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class StyleguideRoutingModule {}
