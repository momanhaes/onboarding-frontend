import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleguideService } from '../../shared/services/styleguide.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesPageComponent } from './pipes-page.component';
import { StyleguideModule } from '../styleguide.module';
import { PIPES } from '../styleguide.content';

describe('PipesPageComponent', () => {
  let component: PipesPageComponent;
  let fixture: ComponentFixture<PipesPageComponent>;
  let styleguideService: StyleguideService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyleguideModule],
      declarations: [PipesPageComponent],
      providers: [StyleguideService],
    }).compileComponents();

    fixture = TestBed.createComponent(PipesPageComponent);
    component = fixture.componentInstance;
    styleguideService = TestBed.inject(StyleguideService);
    spyOn(styleguideService, 'clip');
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve inicializar o "content"', () => {
    fixture.detectChanges();
    expect(component.content).toEqual(PIPES);
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
    const code = '{{ cpf | cpf }}';
    component.clip(code);
    expect(styleguideService.clip).toHaveBeenCalledWith(code);
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });
});
