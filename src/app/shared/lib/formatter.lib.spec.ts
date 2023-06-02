import { FormatterLib } from "./formatter.lib";

describe('FormatterLib', () => {
  let formatterLib: FormatterLib;

  beforeEach(() => {
    formatterLib = new FormatterLib();
  });

  it('Deve formatar o CPF corretamente', () => {
    const cpf = '12345678900';
    const formattedCpf = formatterLib.formatCpf(cpf);
    expect(formattedCpf).toEqual('123.456.789-00');
  });

  it('Deve formatar o CEP corretamente', () => {
    const cep = '12345678';
    const formattedCep = formatterLib.formatCep(cep);
    expect(formattedCep).toEqual('12345-678');
  });

  it('Deve formatar o celular com DDD corretamente', () => {
    const cel = '11999999999';
    const formattedCel = formatterLib.formatCelWithDDD(cel);
    expect(formattedCel).toEqual('(11) 99999-9999');
  });

  it('Deve formatar o telefone com DDD corretamente', () => {
    const tel = '1122223333';
    const formattedTel = formatterLib.formatTelWithDDD(tel);
    expect(formattedTel).toEqual('(11) 2222-3333');
  });

  it('Deve formatar o CNPJ corretamente', () => {
    const cnpj = '12345678000190';
    const formattedCnpj = formatterLib.formatCnpj(cnpj);
    expect(formattedCnpj).toEqual('12.345.678/0001-90');
  });

  it('Deve formatar a conta bancária corretamente', () => {
    const account = '123456789012';
    const formattedAccount = formatterLib.formatAccount(account);
    expect(formattedAccount).toEqual('Ag. 1234 Cc. 678901');
  });

  it('Deve converter um número em uma string antes de formatar', () => {
    const numericValue = 123456789012;
    const formattedNumericValue = formatterLib.formatAccount(numericValue);
    expect(formattedNumericValue).toEqual('Ag. 1234 Cc. 678901');
  });
});