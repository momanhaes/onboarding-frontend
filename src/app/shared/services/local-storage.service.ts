import { Injectable } from '@angular/core';

export enum KeyType {
  TEMA = 'TEMA',
}

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor() {}

  /**
   * Verifica se existe uma chave salva.
   * @param {KeyType} key Chave de acesso para consulta.
   */
  public has(key: KeyType): boolean {
    return key in localStorage;
  }

  /**
   * Salva um conteúdo no formato JSON.
   * @param {KeyType} key Chave de acesso para salvar o conteúdo.
   */
  public set(key: KeyType, value: any): void {
    this.remove(key);
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Traz um conteúdo no formato JSON e retorna como objeto JS.
   * @param {KeyType} key Chave de acesso para trazer o conteúdo.
   */
  public get(key: KeyType): any {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }

  /**
   * Remove um conteúdo.
   * @param {KeyType} key Chave de acesso para remover o conteúdo.
   */
  public remove(key: KeyType): void {
    localStorage.removeItem(key);
  }

  /**
   * Limpa.
   */
  public clear() {
    localStorage.clear();
  }
}
