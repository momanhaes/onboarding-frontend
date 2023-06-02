import { CnpjPipe } from './cnpj.pipe';
import { FormatterLib } from '../lib/formatter.lib';

describe('CnpjPipe', () => {
  let pipe: CnpjPipe;
  let formatter: FormatterLib;

  beforeEach(() => {
    formatter = new FormatterLib();
    pipe = new CnpjPipe(formatter);
  });

  it('deve criar uma instância', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve formatar o número de CNPJ corretamente', () => {
    const numeroCnpj = '12345678901234';
    const cnpjFormatado = pipe.transform(numeroCnpj);
    expect(cnpjFormatado).toEqual('12.345.678/9012-34');
  });

  it('deve lidar com entrada do tipo número', () => {
    const numeroCnpj = 12345678901234;
    const cnpjFormatado = pipe.transform(numeroCnpj);
    expect(cnpjFormatado).toEqual('12.345.678/9012-34');
  });
});
