// ANGULAR MODULES
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// INTERNAL COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

// INTERNAL IMPORTS
import { ROUTES } from './app.routes';

const COMPONENTS = [
  AppComponent,
  HomeComponent
];

const ANGULAR_MODULES = [
  RouterModule.forRoot(ROUTES),
  BrowserAnimationsModule,
  ReactiveFormsModule,
  HttpClientModule,
  BrowserModule,
  FormsModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...ANGULAR_MODULES],
  bootstrap: [AppComponent],
})
export class AppModule {}
