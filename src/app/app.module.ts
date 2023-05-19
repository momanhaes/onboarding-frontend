// ANGULAR IMPORTS
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// MODULES
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// PAGES
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// COMPONENTS
import { AppComponent } from './app.component';

// LOCALE DEFINITIONS
registerLocaleData(localePt, 'pt');

const ANGULAR_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule
];

const INTERNAL_MODULES = [
  AppRoutingModule,
  SharedModule
];

const PAGES = [
  HomeComponent,
  NotFoundComponent
];

const COMPONENTS = [
  AppComponent
]; 

const SERVICES = [
  { provide: LOCALE_ID, useValue: 'pt' }
];

@NgModule({
  imports: [
    ...ANGULAR_MODULES,
    ...INTERNAL_MODULES
  ],
  declarations: [
    ...COMPONENTS, 
    ...PAGES
  ],
  providers: [
    ...SERVICES
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
