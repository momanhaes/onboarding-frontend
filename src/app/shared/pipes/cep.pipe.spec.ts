import { CepPipe } from './cep.pipe';
import { FormatterLib } from '../lib/formatter.lib';

describe('CepPipe', () => {
  let pipe: CepPipe;
  let formatter: FormatterLib;

  beforeEach(() => {
    formatter = new FormatterLib();
    pipe = new CepPipe(formatter);
  });

  it('deve criar uma instância', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve formatar o número de CEP corretamente', () => {
    const numeroCep = '12345678';
    const cepFormatado = pipe.transform(numeroCep);
    expect(cepFormatado).toEqual('12345-678');
  });

  it('deve lidar com entrada do tipo número', () => {
    const numeroCep = 12345678;
    const cepFormatado = pipe.transform(numeroCep);
    expect(cepFormatado).toEqual('12345-678');
  });
});
