import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { ToastyService } from 'src/app/shared/services/toasty.service';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { FormBuilder, FormControl, UntypedFormGroup } from '@angular/forms';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { ADDRESS_INPUTS, CONTACT_INPUTS, GENERAL_INPUTS } from '../customer.content';
import { ICustomer, ICustomerInput } from 'src/app/shared/interfaces/customer.interface';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class CustomerRegisterComponent implements OnInit {
  public isLoading: boolean = false;

  public generalInputs: ICustomerInput[] = GENERAL_INPUTS;
  public contactInputs: ICustomerInput[] = CONTACT_INPUTS;
  public addressInputs: ICustomerInput[] = ADDRESS_INPUTS;

  public form!: UntypedFormGroup;
  public customer!: ICustomer;

  public isEdit: boolean = false;
  public state: string = 'ready';
  public error: string = '';
  public show!: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toasty: ToastyService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
  ) {}

  ngOnInit(): void {
    this.initalizeForm();
    this.getCustomerById();

    setTimeout(() => {
      this.show = true;
    }, 0);
  }

  public initalizeForm(): void {
    this.form = this.formBuilder.group({
      id: new FormControl(''),
      cpf: new FormControl(''),
      cnpj: new FormControl(''),
      name: new FormControl(''),
      birth: new FormControl(''),
      img: new FormControl(''),
      cel: new FormControl(''),
      email: new FormControl(''),
      cep: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      neighborhood: new FormControl(''),
      number: new FormControl(''),
      complement: new FormControl(''),
    });
  }

  public getCustomerById(): void {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.isEdit = true;
      this.isLoading = true;

      setTimeout(() => {
        this.customer = this.customerService.getCustomerById(id);
        this.fillForm();
      }, 500);
    }
  }

  public fillForm(): void {
    this.form.patchValue(this.customer);
    this.isLoading = false;
  }

  public removerCustomer(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.customerService.deleteCustomer(this.customer.id);
      this.toasty.show({ text: 'Cliente removido com sucesso!' });
      this.router.navigate(['/customer/list']);
    }, 500);
  }

  public createCustomer(customer: ICustomer): void {
    this.isLoading = true;

    setTimeout(() => {
      this.customerService.createCustomer(customer);
      this.toasty.show({ text: 'Cliente cadastrado com sucesso!' });
      this.router.navigate(['/customer/list']);
    }, 500);
  }

  public updateCustomer(customer: ICustomer): void {
    this.isLoading = true;

    setTimeout(() => {
      this.customerService.updateCustomer(customer);
      this.toasty.show({ text: 'Cliente atualizado com sucesso!' });
      this.router.navigate(['/customer/list']);
    }, 500);
  }

  public action(): void {
    if (this.form.invalid) {
      return;
    }

    const customer: ICustomer = this.form.value;
    this.isEdit ? this.updateCustomer(customer) : this.createCustomer(customer);
  }

  public cancel(): void {
    this.router.navigate(['/customer/list']);
  }
}
