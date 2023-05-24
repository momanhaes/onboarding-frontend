import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonsPageComponent } from './buttons-page.component';
import { StyleguideModule } from '../styleguide.module';

describe('ButtonsPageComponent', () => {
  let component: ButtonsPageComponent;
  let fixture: ComponentFixture<ButtonsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyleguideModule],
      declarations: [ButtonsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
