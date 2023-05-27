import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleguideService } from '../../shared/services/styleguide.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsPageComponent } from './items-page.component';
import { StyleguideModule } from '../styleguide.module';
import { ITEMS } from '../styleguide.content';

describe('ItemsPageComponent', () => {
  let component: ItemsPageComponent;
  let fixture: ComponentFixture<ItemsPageComponent>;
  let styleguideService: StyleguideService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyleguideModule],
      declarations: [ItemsPageComponent],
      providers: [StyleguideService],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsPageComponent);
    component = fixture.componentInstance;
    styleguideService = TestBed.inject(StyleguideService);
    spyOn(styleguideService, 'clip');
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve inicializar o "content"', () => {
    fixture.detectChanges();
    expect(component.content).toEqual(ITEMS);
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
    const code = '<app-item label="Standard" value="Valor sem formatação" type="standard"></app-item>';
    component.clip(code);
    expect(styleguideService.clip).toHaveBeenCalledWith(code);
  });

  afterEach(() => {
    if (fixture) {
      fixture.destroy();
    }
  });
});
