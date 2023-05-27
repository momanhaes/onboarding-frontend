import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { IStyleguideInput } from 'src/app/shared/interfaces/styleguide.interface';
import { StyleguideService } from '../../shared/services/styleguide.service';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { ICEP } from 'src/app/shared/interfaces/shared.interface';
import { EMAIL_PATTERN } from 'src/app/shared/utils/patterns';
import { INPUTS } from '../styleguide.content';

@Component({
  selector: 'app-inputs-page',
  templateUrl: './inputs-page.component.html',
  styleUrls: ['./inputs-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class InputsPageComponent implements OnInit {
  public content: IStyleguideInput[] = INPUTS;
  public cep: ICEP = {} as ICEP;
  public form!: UntypedFormGroup;
  public state: string = 'ready';
  public cepCode: string;
  public show!: boolean;

  constructor(private styleguideService: StyleguideService) {
    this.cepCode = `<app-cep [form]="form" [required]="false" (addressByCepEvent)="getAddress($event)"></app-cep>`;
  }

  ngOnInit() {
    this.form = new UntypedFormGroup({
      input: new UntypedFormControl(''),
      search: new UntypedFormControl(''),
      password: new UntypedFormControl(''),
      disabled: new UntypedFormControl(''),
      required: new UntypedFormControl('', [ Validators.required ]),
      email: new UntypedFormControl('', [ Validators.pattern(EMAIL_PATTERN) ]),
      cpf: new UntypedFormControl(''),
      cnpj: new UntypedFormControl(''),
      birth: new UntypedFormControl(''),
      cel: new UntypedFormControl(''),
      cep: new UntypedFormControl(''),
    });

    setTimeout(() => {
      this.show = true;
    }, 0);
  }

  public clip(code: string): void {
    this.styleguideService.clip(code);
  }

  public getAddress(cep: ICEP) {
    if (!cep.cep) { return this.cep = {} as ICEP; }

    return this.cep = cep;
  }

  public cleanCep(event: Event) {
    const target = event.target as HTMLInputElement;
    const cep: string = target?.value.replace(/\.|\-/g, '');

    if (cep.length !== 8) return this.cep = {} as ICEP;

    return this.cep;
  }
}
