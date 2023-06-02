import { FormatterLib } from '../lib/formatter.lib';
import { CelWithDDDPipe } from './cel.pipe';

describe('CelWithDDDPipe', () => {
  let pipe: CelWithDDDPipe;
  let formatter: FormatterLib;

  beforeEach(() => {
    formatter = new FormatterLib();
    pipe = new CelWithDDDPipe(formatter);
  });

  it('deve criar uma instância', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve formatar o número de celular com DDD corretamente', () => {
    const numeroCelular = '11987654321';
    const celularFormatado = pipe.transform(numeroCelular);
    expect(celularFormatado).toEqual('(11) 98765-4321');
  });

  it('deve lidar com entrada do tipo número', () => {
    const numeroCelular = 11987654321;
    const celularFormatado = pipe.transform(numeroCelular);
    expect(celularFormatado).toEqual('(11) 98765-4321');
  });
});
