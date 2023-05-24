import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsModule } from '../components.module';
import { ToastyComponent } from './toasty.component';

describe('ToastyComponent', () => {
  let component: ToastyComponent;
  let fixture: ComponentFixture<ToastyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ComponentsModule],
      declarations: [ToastyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
