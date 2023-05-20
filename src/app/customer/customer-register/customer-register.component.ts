import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { ICustomer } from 'src/app/shared/interfaces/customer.interface';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { FormBuilder, FormControl, UntypedFormGroup } from '@angular/forms';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ADDRESS_INPUTS, CONTACT_INPUTS, GENERAL_INPUTS, IInput } from './customer.content';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class CustomerRegisterComponent implements OnInit {
  public isLoading: boolean = false;

  public generalInputs: IInput[] = GENERAL_INPUTS;
  public contactInputs: IInput[] = CONTACT_INPUTS;
  public addressInputs: IInput[] = ADDRESS_INPUTS;

  public form!: UntypedFormGroup;
  public customer!: ICustomer;

  public isEdit: boolean = false;
  public state: string = 'ready';
  public error: string = '';
  public show!: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initalizeForm();
    this.getIDfromCustomer();

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
      ddd: new FormControl(''),
      cel: new FormControl(''),
      email: new FormControl(''),
      cep: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      addressName: new FormControl(''),
      neighborhood: new FormControl(''),
      number: new FormControl(''),
      complement: new FormControl(''),
    });
  }

  public getIDfromCustomer(): void {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.isEdit = true;
      this.isLoading = true;

      setTimeout(() => {
        // TODO: Chamar método de busca de cliente por id
      }, 500);
    }
  }

  public action(): void {
    if (this.form.invalid) { return; }

    const customer: ICustomer = this.form.value;

    // this.isLoading = true;
    // this.isEdit ? this.update(customer) : this.add(customer);
  }
}
