import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorsPageComponent } from './colors-page.component';
import { StyleguideModule } from '../styleguide.module';

describe('ColorsPageComponent', () => {
  let component: ColorsPageComponent;
  let fixture: ComponentFixture<ColorsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyleguideModule],
      declarations: [ColorsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
