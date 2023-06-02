import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class FormatterLib {
  /**
   * Adiciona máscara ao número de cpf
   * @param {number | string} value cpf
   */
  public formatCpf(value: number | string): string {
    const unformattedValue = value.toString().replace(/\D/g, '');
    const leadingZerosValue = `${'0'.repeat(11)}${unformattedValue}`.slice(-11);
    return leadingZerosValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  }

  /**
   * Adiciona máscara ao número de cep
   * @param {number | string} value cep
   */
  public formatCep(value: number | string): string {
    const unformattedValue = value.toString().replace(/\D/g, '');
    const leadingZerosValue = `${'0'.repeat(8)}${unformattedValue}`.slice(-8);
    return leadingZerosValue.replace(/^(\d{5})(\d{3})$/, '$1-$2');
  }

  /**
   * Adiciona máscara ao número de cel
   * @param {number | string} value cel
   */
  public formatCelWithDDD(value: number | string): string {
    const unformattedValue = value.toString().replace(/\D/g, '');
    const leadingZerosValue = `${'0'.repeat(11)}${unformattedValue}`.slice(-11);
    return leadingZerosValue.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  }

  /**
   * Adiciona máscara ao número de tel
   * @param {number | string} value tel
   */
  public formatTelWithDDD(value: number | string): string {
    const unformattedValue = value.toString().replace(/\D/g, '');
    const leadingZerosValue = `${'0'.repeat(10)}${unformattedValue}`.slice(-10);
    return leadingZerosValue.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
  }

  /**
   * Adiciona máscara ao número de cnpj
   * @param {number | string} value cnpj
   */
  public formatCnpj(value: number | string): string {
    const unformattedValue = value.toString().replace(/\D/g, '');
    const leadingZerosValue = `${'0'.repeat(11)}${unformattedValue}`.slice(-14);
    return leadingZerosValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  }

  /**
   * Adiciona máscara ao número de conta bancária
   * @param {number | string} value Conta bancária
   */
  public formatAccount(value: number | string): string {
    if (typeof value === 'number') { value = value.toString(); }

    const nConta = value.substring(5, 11).replace(/^(\d{4})(\d{1})$/, '$1-$2');
    const agencia = `Ag. ${value.substring(0, 4)}`;
    const conta = `Cc. ${nConta}`;
    return `${agencia} ${conta}`;
  }
}
