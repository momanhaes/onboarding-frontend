import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemsPageComponent } from './items-page.component';
import { StyleguideModule } from '../styleguide.module';

describe('ItemsPageComponent', () => {
  let component: ItemsPageComponent;
  let fixture: ComponentFixture<ItemsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyleguideModule],
      declarations: [ItemsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
