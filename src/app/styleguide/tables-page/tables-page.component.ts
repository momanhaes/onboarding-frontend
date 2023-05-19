import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { ToastyService } from 'src/app/shared/services/toasty.service';
import { ICustomer } from 'src/app/shared/interfaces/customer.interface';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ITable, TABLES } from './tables-page.content';

@Component({
  selector: 'app-tables-page',
  templateUrl: './tables-page.component.html',
  styleUrls: ['./tables-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class TablesPageComponent implements OnInit {
  public loading: boolean = true;
  public data: ICustomer[] = [];
  public show!: boolean;
  public state = 'ready';

  constructor(
    private customerService: CustomerService,
    private toasty: ToastyService
  ) {}

  public get tables(): ITable[] {
    return TABLES;
  }

  ngOnInit() {
    this.getData();

    setTimeout(() => {
      this.show = true;
    }, 0);
  }

  public getData(): void {
    setTimeout(() => {
      this.customerService.getCustomers().subscribe((customers: ICustomer[]) => {
        this.data = customers;
        this.loading = false;
      });
    }, 500);
  }

  public clip(code: string): void {
    this.clipboard(code);
    this.toasty.show({ text: `${code} copiado!` });
  }

  public clipboard(word: string): void {
    const el = document.createElement('textarea');
    el.value = word;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
