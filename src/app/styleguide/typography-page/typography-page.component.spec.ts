import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypographyPageComponent } from './typography-page.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StyleguideModule } from '../styleguide.module';

describe('TypographyPageComponent', () => {
  let component: TypographyPageComponent;
  let fixture: ComponentFixture<TypographyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyleguideModule],
      declarations: [TypographyPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TypographyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
