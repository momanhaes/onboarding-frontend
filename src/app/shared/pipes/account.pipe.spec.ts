import { AccountPipe } from './account.pipe';
import { FormatterLib } from '../lib/formatter.lib';

describe('AccountPipe', () => {
  let pipe: AccountPipe;
  let formatter: FormatterLib;

  beforeEach(() => {
    formatter = new FormatterLib();
    pipe = new AccountPipe(formatter);
  });

  it('deve criar uma instância', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve formatar o número da conta corretamente', () => {
    const numeroConta = 1234567890;
    const contaFormatada = pipe.transform(numeroConta);
    expect(contaFormatada).toEqual('Ag. 1234 Cc. 6789-0');
  });

  it('deve lidar com entrada do tipo string', () => {
    const numeroConta = '9876543210';
    const contaFormatada = pipe.transform(numeroConta);
    expect(contaFormatada).toEqual('Ag. 9876 Cc. 4321-0');
  });
});