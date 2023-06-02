import { CpfPipe } from './cpf.pipe';
import { FormatterLib } from '../lib/formatter.lib';

describe('CpfPipe', () => {
  let pipe: CpfPipe;
  let formatter: FormatterLib;

  beforeEach(() => {
    formatter = new FormatterLib();
    pipe = new CpfPipe(formatter);
  });

  it('deve criar uma instância', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve formatar o número de CPF corretamente', () => {
    const numeroCpf = '12345678901';
    const cpfFormatado = pipe.transform(numeroCpf);
    expect(cpfFormatado).toEqual('123.456.789-01');
  });

  it('deve lidar com entrada do tipo número', () => {
    const numeroCpf = 12345678901;
    const cpfFormatado = pipe.transform(numeroCpf);
    expect(cpfFormatado).toEqual('123.456.789-01');
  });
});
