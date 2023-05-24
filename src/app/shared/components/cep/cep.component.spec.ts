import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsModule } from '../components.module';
import { CEPService } from '../../services/cep.service';
import { CepComponent } from './cep.component';

describe('CepComponent', () => {
  let component: CepComponent;
  let fixture: ComponentFixture<CepComponent>;
  let cepService: jasmine.SpyObj<CEPService>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    const cepServiceSpy = jasmine.createSpyObj('CEPService', ['getAddress']);

    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        ComponentsModule,
        FormsModule,
      ],
      declarations: [CepComponent],
      providers: [{ provide: CEPService, useValue: cepServiceSpy }],
    }).compileComponents();

    formBuilder = TestBed.inject(FormBuilder);
    cepService = TestBed.inject(CEPService) as jasmine.SpyObj<CEPService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepComponent);
    component = fixture.componentInstance;
    component.form = formBuilder.group({ cep: '' });
    component.control = 'cep';
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
