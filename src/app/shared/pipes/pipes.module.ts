// ANGULAR IMPORTS
import { NgModule } from '@angular/core';

// PIPES
import { CpfPipe } from './cpf.pipe';
import { CepPipe } from './cep.pipe';
import { CnpjPipe } from './cnpj.pipe';
import { CelWithDDDPipe } from './cel.pipe';
import { TelWithDDDPipe } from './tel.pipe';
import { AccountPipe } from './account.pipe';

const PIPES = [
  CpfPipe,
  CnpjPipe,
  AccountPipe,
  CepPipe,
  CelWithDDDPipe,
  TelWithDDDPipe,
];

@NgModule({
  declarations: [
    ...PIPES
  ],
  exports: [
    ...PIPES
  ],
})
export class PipesModule {}
