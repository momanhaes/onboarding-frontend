import { TelWithDDDPipe } from './tel.pipe';
import { FormatterLib } from '../lib/formatter.lib';

describe('TelWithDDDPipe', () => {
  let pipe: TelWithDDDPipe;
  let formatter: FormatterLib;

  beforeEach(() => {
    formatter = new FormatterLib();
    pipe = new TelWithDDDPipe(formatter);
  });

  it('deve criar uma instância', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve formatar o número de telefone com DDD corretamente', () => {
    const numeroTel = '5512345678';
    const telFormatado = pipe.transform(numeroTel);
    expect(telFormatado).toEqual('(55) 1234-5678');
  });

  it('deve lidar com entrada do tipo número', () => {
    const numeroTel = 5512345678;
    const telFormatado = pipe.transform(numeroTel);
    expect(telFormatado).toEqual('(55) 1234-5678');
  });
});
