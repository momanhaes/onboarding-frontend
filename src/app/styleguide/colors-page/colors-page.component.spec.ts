import { IStyleguideColor } from 'src/app/shared/interfaces/styleguide.interface';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleguideService } from '../../shared/services/styleguide.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorsPageComponent } from './colors-page.component';
import { StyleguideModule } from '../styleguide.module';
import { COLORS } from '../styleguide.content';

describe('ColorsPageComponent', () => {
  let component: ColorsPageComponent;
  let fixture: ComponentFixture<ColorsPageComponent>;
  let styleguideService: StyleguideService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyleguideModule],
      declarations: [ColorsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorsPageComponent);
    component = fixture.componentInstance;
    styleguideService = TestBed.inject(StyleguideService);
    spyOn(styleguideService, 'clipColor');
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve inicializar o "content"', () => {
    fixture.detectChanges();
    expect(component.content).toEqual(COLORS);
  });

  it('Deve setar "show" para "true" depois do timeout', () => {
    jasmine.clock().install();
    fixture.detectChanges();
    expect(component.show).toBeUndefined();
    jasmine.clock().tick(1);
    expect(component.show).toBe(true);
    jasmine.clock().uninstall();
  });

  it('Deve chamar styleguideService.clipColor() com o código fornecido', () => {
    const color: IStyleguideColor = {
      name: 'Primary',
      hex: '#1da1f2',
    };
    component.clip(color);
    expect(styleguideService.clipColor).toHaveBeenCalledWith(color);
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });
});
