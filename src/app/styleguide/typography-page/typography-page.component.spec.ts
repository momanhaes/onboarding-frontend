import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleguideService } from '../../shared/services/styleguide.service';
import { TypographyPageComponent } from './typography-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StyleguideModule } from '../styleguide.module';
import { TYPOGRAPHY } from '../styleguide.content';

describe('TypographyPageComponent', () => {
  let component: TypographyPageComponent;
  let fixture: ComponentFixture<TypographyPageComponent>;
  let styleguideService: StyleguideService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyleguideModule],
      declarations: [TypographyPageComponent],
      providers: [StyleguideService],
    }).compileComponents();

    fixture = TestBed.createComponent(TypographyPageComponent);
    component = fixture.componentInstance;
    styleguideService = TestBed.inject(StyleguideService);
    spyOn(styleguideService, 'clip');
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve inicializar o "content"', () => {
    fixture.detectChanges();
    expect(component.content).toEqual(TYPOGRAPHY);
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
    const code = '<h1 class="title">Título</h1>';
    component.clip(code);
    expect(styleguideService.clip).toHaveBeenCalledWith(code);
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });
});
