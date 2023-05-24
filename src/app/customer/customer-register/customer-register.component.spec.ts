import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerRegisterComponent } from './customer-register.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerModule } from '../customer.module';

describe('CustomerRegisterComponent', () => {
  let component: CustomerRegisterComponent;
  let fixture: ComponentFixture<CustomerRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CustomerModule, RouterTestingModule],
      declarations: [CustomerRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
