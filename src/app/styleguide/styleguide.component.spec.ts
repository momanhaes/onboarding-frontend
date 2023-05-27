import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { WindowService } from '../shared/services/window.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StyleguideComponent } from './styleguide.component';
import { StyleguideModule } from './styleguide.module';
import { Subscription } from 'rxjs';

describe('StyleguideComponent', () => {
  let component: StyleguideComponent;
  let fixture: ComponentFixture<StyleguideComponent>;
  let windowService: WindowService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyleguideModule, RouterTestingModule],
      declarations: [StyleguideComponent],
      providers: [WindowService],
    }).compileComponents();

    fixture = TestBed.createComponent(StyleguideComponent);
    windowService = TestBed.inject(WindowService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve inicializar as propriedades do componente', () => {
    expect(component.routes).toBeDefined();
    expect(component.state).toBe('ready');
    expect(component.show).toBeFalse();
    expect(component.isMobile).toBeDefined();
  });

  it('Deve setar "show" para "true" depois do delay', fakeAsync(() => {
    component.ngOnInit();
    tick(1);

    expect(component.show).toBe(true);
  }));

  it('Deve redefinir a tela pro tamanho mobile', () => {
    const isMobileValue = true;

    spyOn(windowService.isMobile, 'subscribe').and.callFake((callback) => {
      callback(isMobileValue);
      return new Subscription();
    });

    component.ngOnInit();

    expect(component.isMobile).toBe(isMobileValue);
  });

  it('Deve redefinir a tela pro tamanho desktop', () => {
    const isMobileValue = false;

    spyOn(windowService.isMobile, 'subscribe').and.callFake((callback) => {
      callback(isMobileValue);
      return new Subscription();
    });

    component.ngOnInit();

    expect(component.isMobile).toBe(isMobileValue);
  });
});
