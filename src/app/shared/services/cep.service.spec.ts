import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CEPService } from './cep.service';
import { VIA_CEP_API } from 'src/app/app.api';

describe('CEPService', () => {
  let service: CEPService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CEPService],
    });
    service = TestBed.inject(CEPService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  it('Deve buscar o CEP corretamente', () => {
    const cep = '20530290';
    const mockResponse = {
      cep: '20530-290',
      logradouro: 'Rua Embaixador Ramon Carcano',
      complemento: '',
      bairro: 'Tijuca',
      localidade: 'Rio de Janeiro',
      uf: 'RJ',
      ibge: '3304557',
      gia: '',
      ddd: '21',
      siafi: '6001',
    };

    service.getAddress(cep).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${VIA_CEP_API}${cep}/json`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
