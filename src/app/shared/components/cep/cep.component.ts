import { Component, EventEmitter, Input, Output } from '@angular/core';
import { catchError, distinctUntilChanged } from 'rxjs';
import { ICEP } from '../../interfaces/shared.interface';
import { CEPService } from '../../services/cep.service';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent {
  public isLoading: boolean = false;
  public error: string = '';

  @Output() addressByCepEvent = new EventEmitter<ICEP>();
  @Input() required: boolean = false;
  @Input() form!: UntypedFormGroup;
  @Input() control: string = 'cep';

  constructor(private cepService: CEPService) {}

  public findAddressByCEP(event: Event) {
    const target = event.target as HTMLInputElement;
    const cep: string = target?.value.replace(/\.|\-/g, '');

    if (!cep || cep.length !== 8) return;

    this.isLoading = true;

    setTimeout(() => {
      this.cepService
        .getAddress(cep)
        .pipe(
          distinctUntilChanged(),
          catchError((err) => {
            this.isLoading = false;
            return this.error = err;
          })
        )
        .subscribe((cep) => {
          this.addressByCepEvent.emit(cep as ICEP);
          this.isLoading = false;
        });
    }, 500);
  }
}
