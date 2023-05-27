import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleguideService } from '../../shared/services/styleguide.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconsPageComponent } from './icons-page.component';
import { StyleguideModule } from '../styleguide.module';
import { ICONS } from '../styleguide.content';

describe('IconsPageComponent', () => {
  let component: IconsPageComponent;
  let fixture: ComponentFixture<IconsPageComponent>;
  let styleguideService: StyleguideService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyleguideModule],
      declarations: [IconsPageComponent],
      providers: [StyleguideService],
    }).compileComponents();

    fixture = TestBed.createComponent(IconsPageComponent);
    component = fixture.componentInstance;
    styleguideService = TestBed.inject(StyleguideService);
    spyOn(styleguideService, 'clip');
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve inicializar o "content"', () => {
    fixture.detectChanges();
    expect(component.content).toEqual(ICONS);
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
    const code = '<mat-icon>home</mat-icon>';
    component.clip(code);
    expect(styleguideService.clip).toHaveBeenCalledWith(code);
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });
});
