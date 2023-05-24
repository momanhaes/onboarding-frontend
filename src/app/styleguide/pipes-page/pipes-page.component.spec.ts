import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesPageComponent } from './pipes-page.component';
import { StyleguideModule } from '../styleguide.module';

describe('PipesPageComponent', () => {
  let component: PipesPageComponent;
  let fixture: ComponentFixture<PipesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, StyleguideModule],
      declarations: [PipesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
