import { CUSTOMERS_MOCK } from 'src/app/customer/customer.mock';
import { ETema } from '../interfaces/shared.interface';
import { LocalStorageService, KeyType } from './local-storage.service';

describe('LocalStorageService', () => {
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    localStorage.clear();
    localStorageService = new LocalStorageService();
  });

  it('Verifica se existe uma key no local storage', () => {
    localStorageService.set(KeyType.TEMA, { icon: 'light_mode', label: ETema.LIGHT });
    expect(localStorageService.has(KeyType.TEMA)).toBe(true);
    expect(localStorageService.has(KeyType.MOCK)).toBe(false);
  });

  it('Deve setar uma key no local storage', () => {
    localStorageService.set(KeyType.TEMA, { icon: 'light_mode', label: ETema.LIGHT });
    expect(localStorageService.get(KeyType.TEMA)).toEqual({ icon: 'light_mode', label: ETema.LIGHT });
  });

  it('Deve retornar null quando não tiver algo no local storage', () => {
    expect(localStorageService.get(KeyType.TEMA)).toBeNull();
  });

  it('Deve remover uma key do local storage', () => {
    localStorageService.set(KeyType.TEMA, { icon: 'dark_mode', label: ETema.DARK });
    localStorageService.remove(KeyType.TEMA);
    expect(localStorageService.get(KeyType.TEMA)).toBeNull();
  });

  it('Deve limpar o local storage', () => {
    localStorageService.set(KeyType.TEMA, { icon: 'light_mode', label: ETema.LIGHT });
    localStorageService.set(KeyType.MOCK, CUSTOMERS_MOCK);
    localStorageService.clear();
    expect(localStorageService.get(KeyType.TEMA)).toBeNull();
    expect(localStorageService.get(KeyType.TEMA)).toBeNull();
  });
});
