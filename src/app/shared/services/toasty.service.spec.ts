import { TestBed } from '@angular/core/testing';
import { ToastyService } from './toasty.service';
import { IToasty } from '../interfaces/shared.interface';

describe('ToastyService', () => {
  let service: ToastyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastyService],
    });
    service = TestBed.inject(ToastyService);
  });

  it('Deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  it('Deve adicionar um toasty', () => {
    const toasty: IToasty = { text: 'Mensagem de teste' };
    service.show(toasty);
    expect(service.toastys.length).toBe(1);
    expect(service.toastys[0]).toEqual(toasty);
  });

  it('Deve emitir o evento de exibição dos toastys', () => {
    const toasty: IToasty = { text: 'Mensagem de teste' };
    const showSpy = spyOn(service._show, 'emit');
    service.show(toasty);
    expect(showSpy).toHaveBeenCalledWith(service.toastys);
  });
});
