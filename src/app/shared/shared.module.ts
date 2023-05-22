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
import { CEPService } from './services/cep.service';

const MODULES = [
  ComponentsModule,
  FragmentsModule,
];

const SERVICES = [
  LocalStorageService,
  NotificationService,
  CustomerService,
  WindowService,
  CEPService
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