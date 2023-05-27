import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleguideService } from '../../shared/services/styleguide.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonsPageComponent } from './buttons-page.component';
import { StyleguideModule } from '../styleguide.module';
import { BUTTONS } from '../styleguide.content';

describe('ButtonsPageComponent', () => {
  let component: ButtonsPageComponent;
  let fixture: ComponentFixture<ButtonsPageComponent>;
  let styleguideService: StyleguideService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyleguideModule],
      declarations: [ButtonsPageComponent],
      providers: [StyleguideService],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonsPageComponent);
    component = fixture.componentInstance;
    styleguideService = TestBed.inject(StyleguideService);
    spyOn(styleguideService, 'clip');
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve inicializar o "content"', () => {
    fixture.detectChanges();
    expect(component.content).toEqual(BUTTONS);
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
    const code = '<app-button theme="primary" label="Primary"></app-button>';
    component.clip(code);
    expect(styleguideService.clip).toHaveBeenCalledWith(code);
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });
});
