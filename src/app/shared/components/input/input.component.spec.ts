import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { ComponentsModule } from '../components.module';
import { ChangeDetectorRef } from '@angular/core';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let cdr: jasmine.SpyObj<ChangeDetectorRef>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    const cdrSpy = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, BrowserAnimationsModule, ComponentsModule],
      declarations: [InputComponent],
      providers: [
        FormBuilder,
        { provide: ChangeDetectorRef, useValue: cdrSpy }
      ]
    }).compileComponents();

    formBuilder = TestBed.inject(FormBuilder);
    cdr = TestBed.inject(ChangeDetectorRef) as jasmine.SpyObj<ChangeDetectorRef>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.form = formBuilder.group({ control: '' });
    component.control = 'control';
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
