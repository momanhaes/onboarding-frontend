import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowService } from '../shared/services/window.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerComponent } from './customer.component';
import { CustomerModule } from './customer.module';
import { Subscription } from 'rxjs';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;
  let windowService: WindowService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, CustomerModule, RouterTestingModule],
      declarations: [CustomerComponent],
      providers: [WindowService],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    windowService = TestBed.inject(WindowService);
    spyOn(windowService.isMobile, 'subscribe').and.returnValue(new Subscription());
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
