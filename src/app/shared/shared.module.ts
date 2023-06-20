// ANGULAR IMPORTS
import { NgModule } from '@angular/core';

// MODULES
import { ComponentsModule } from './components/components.module';
import { FragmentsModule } from './fragments/fragments.module';

// SERVICES
import { WindowService } from './services/window.service';
import { CustomerService } from './services/customer.service';
import { NotificationService } from './services/notification.service';
import { LocalStorageService } from './services/local-storage.service';
import { CalculatorService } from './services/calculator.service';
import { GithubService } from './services/github.service';
import { CEPService } from './services/cep.service';
import { FormatterLib } from './lib/formatter.lib';
import { HelperLib } from './lib/helper.lib';

const MODULES = [
  ComponentsModule,
  FragmentsModule,
];

const SERVICES = [
  LocalStorageService,
  NotificationService,
  CalculatorService,
  CustomerService,
  WindowService,
  GithubService,
  FormatterLib,
  CEPService,
  HelperLib,
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
  providers: [
    ...SERVICES
  ]
})
export class SharedModule {}