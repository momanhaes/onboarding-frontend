import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EOrigin, ICEP } from 'src/app/shared/interfaces/shared.interface';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { ToastyService } from 'src/app/shared/services/toasty.service';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { FormBuilder, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { ADDRESS_INPUTS, CONTACT_INPUTS, GENERAL_INPUTS } from '../customer.content';
import { ICustomer, ICustomerInput } from 'src/app/shared/interfaces/customer.interface';
import { EMAIL_PATTERN } from 'src/app/shared/utils/patterns';

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
    public dialog: MatDialog,
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
      cpf: new FormControl('', Validators.required),
      cnpj: new FormControl(''),
      name: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      birth: new FormControl(''),
      cel: new FormControl('', Validators.required),
      email: new FormControl('', [ Validators.required, Validators.pattern(EMAIL_PATTERN) ]),
      cep: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      neighborhood: new FormControl('', Validators.required),
      number: new FormControl(''),
      complement: new FormControl(''),
    });
  }

  public getAddress(cep: ICEP) {
    if (!cep.cep) { 
      this.form.patchValue({ address: '', neighborhood: '', state: '', city: '', complement: '', number: '' });
      return;
    }

    this.form.patchValue({
      address: cep.logradouro,
      neighborhood: cep.bairro,
      state: cep.uf,
      city: cep.localidade,
      complement: cep.complemento,
      number: '',
    });
  }

  public getCustomerById(): void {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.customer = this.customerService.getCustomerById(id);

      if (!this.customer?.id) {
        this.router.navigate(['/customer/list']);
      }

      this.isEdit = true;
      this.isLoading = true;

      setTimeout(() => {
        this.form.patchValue(this.customer);
        this.isLoading = false;
      }, 500);
    }
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

  public cancel(): void {
    this.router.navigate(['/customer/list']);
  }

  public action(): void {
    if (this.form.invalid) { return; }

    const customer: ICustomer = this.form.value;
    this.isEdit ? this.updateCustomer(customer) : this.createCustomer(customer);
  }

  public openDialog(): void {
    if (this.form.invalid) { return; }
    
    this.isEdit ? this.openEditDialog() : this.openCreateDialog();
  }

  public openRemoveDialog(): void {
    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(
      DialogComponent,
      {
        data: {
          title: 'Atenção! Você decidiu excluir.',
          message: `Tem certeza que deseja remover o cliente '${this.customer.name}'?`,
          origin: EOrigin.DELETE,
        },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.confirm && result.origin === EOrigin.DELETE) {
        this.removerCustomer();
      }
    });
  }

  public openEditDialog(): void {
    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(
      DialogComponent,
      {
        data: {
          title: 'Atenção! Você decidiu editar.',
          message: `Tem certeza que deseja alterar os dados do cliente '${this.customer.name}'?`,
          origin: EOrigin.EDIT,
        },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.confirm && result.origin === EOrigin.EDIT) {
        this.action();
      }
    });
  }

  public openCreateDialog(): void {
    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(
      DialogComponent,
      {
        data: {
          title: 'Atenção! Você decidiu criar.',
          message: `Tem certeza que deseja inserir o cliente '${this.form.value.name}'?`,
          origin: EOrigin.CREATE,
        },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.confirm && result.origin === EOrigin.CREATE) {
        this.action();
      }
    });
  }
}
