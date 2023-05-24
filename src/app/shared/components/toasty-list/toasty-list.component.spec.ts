import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastyListComponent } from './toasty-list.component';
import { ComponentsModule } from '../components.module';

describe('ToastyListComponent', () => {
  let component: ToastyListComponent;
  let fixture: ComponentFixture<ToastyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ComponentsModule],
      declarations: [ToastyListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
