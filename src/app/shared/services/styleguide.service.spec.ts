import { TestBed } from '@angular/core/testing';
import { StyleguideService } from './styleguide.service';
import { ToastyService } from './toasty.service';

describe('StyleguideService', () => {
  let service: StyleguideService;
  let toastyServiceSpy: jasmine.SpyObj<ToastyService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ToastyService', ['show']);

    TestBed.configureTestingModule({
      providers: [StyleguideService, { provide: ToastyService, useValue: spy }],
    });

    service = TestBed.inject(StyleguideService);
    toastyServiceSpy = TestBed.inject(
      ToastyService
    ) as jasmine.SpyObj<ToastyService>;
  });

  it('Deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  describe('clip', () => {
    it('Deve chamar o método clipboard e mostrar o toast', () => {
      const code = 'some code';
      spyOn(service, 'clipboard');

      service.clip(code);

      expect(service.clipboard).toHaveBeenCalledWith(code);
      expect(toastyServiceSpy.show).toHaveBeenCalledWith({
        text: `${code} copiado!`,
      });
    });
  });

  describe('clipColor', () => {
    it('Deve chamar o método clipboard passando as propriedades da cor e mostrar o toast', () => {
      const color = { name: 'primary', hex: '#ffffff' };
      const expectedCode = `$${color.name}: ${color.hex}`;
      spyOn(service, 'clipboard');

      service.clipColor(color);

      expect(service.clipboard).toHaveBeenCalledWith(expectedCode);
      expect(toastyServiceSpy.show).toHaveBeenCalledWith({
        text: `${expectedCode} copiado!`,
      });
    });
  });

  describe('clip', () => {
    it('Deve chamar o execCommand e mostrar o toast', () => {
      const code = 'some code';
      const execCommandSpy = spyOn(document, 'execCommand');
      
      service.clip(code);

      expect(execCommandSpy).toHaveBeenCalledWith('copy');
      expect(toastyServiceSpy.show).toHaveBeenCalledWith({ text: `${code} copiado!` });
    });
  });
});
