import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleguideService } from '../../shared/services/styleguide.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ICEP } from 'src/app/shared/interfaces/shared.interface';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputsPageComponent } from './inputs-page.component';
import { StyleguideModule } from '../styleguide.module';
import { INPUTS } from '../styleguide.content';

describe('InputPageComponent', () => {
  let component: InputsPageComponent;
  let fixture: ComponentFixture<InputsPageComponent>;
  let styleguideService: StyleguideService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        StyleguideModule,
      ],
      declarations: [InputsPageComponent],
      providers: [StyleguideService],
    }).compileComponents();

    fixture = TestBed.createComponent(InputsPageComponent);
    component = fixture.componentInstance;
    styleguideService = TestBed.inject(StyleguideService);
    spyOn(styleguideService, 'clip');
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve inicializar o "content"', () => {
    fixture.detectChanges();
    expect(component.content).toEqual(INPUTS);
  });

  it('Deve inicializar o formulário', () => {
    fixture.detectChanges();
    const formControls = component.form.controls;
    expect(formControls['input']).toBeDefined();
    expect(formControls['search']).toBeDefined();
    expect(formControls['password']).toBeDefined();
    expect(formControls['disabled']).toBeDefined();
    expect(formControls['required']).toBeDefined();
    expect(formControls['email']).toBeDefined();
    expect(formControls['cpf']).toBeDefined();
    expect(formControls['cnpj']).toBeDefined();
    expect(formControls['birth']).toBeDefined();
    expect(formControls['cel']).toBeDefined();
    expect(formControls['cep']).toBeDefined();
  });

  it('Deve setar "show" para "true" depois do timeout', () => {
    jasmine.clock().install();
    fixture.detectChanges();
    expect(component.show).toBeUndefined();
    jasmine.clock().tick(1);
    expect(component.show).toBe(true);
    jasmine.clock().uninstall();
  });

  it('Deve chamar styleguideService.clip() com o código fornecido', () => {
    const code = '<app-input [form]="form" type="text" label="Padrão" control="input" placeholder="Input padrão"></app-input>';
    component.clip(code);
    expect(styleguideService.clip).toHaveBeenCalledWith(code);
  });

  it('Deve chamar getAddress e setar o CEP quando o endereço é fornecido', () => {
    const cep: ICEP = {
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

    component.getAddress(cep);
    expect(component.cep).toEqual(cep);
  });

  it('Deve retornar um objeto vazio quando o CEP não é fornecido', () => {
    component.getAddress({} as ICEP);
    expect(component.cep).toEqual({} as ICEP);
  });

  it('Deve chamar o método cleanCep e setar um objeto vazio quando o CEP não tem 8 caracteres', () => {
    const event = { target: { value: '12345' } };

    component.cleanCep(event as unknown as Event);
    expect(component.cep).toEqual({} as ICEP);
  });

  it('Não deve setar um objeto vazio quando o CEP tem 8 caracteres', () => {
    const event = { target: { value: '20530290' } };
    
    const mock: ICEP = {
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
    }

    component.cep = mock;
    const cep: ICEP = mock;

    component.cleanCep(event as unknown as Event);
    expect(component.cep).toEqual(cep);
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });
});
