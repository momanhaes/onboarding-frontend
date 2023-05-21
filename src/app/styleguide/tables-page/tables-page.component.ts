import { Component, OnInit } from '@angular/core';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { LIST_ANIMATION_LATERAL } from 'src/app/shared/animations/list.animation';
import { ToastyService } from 'src/app/shared/services/toasty.service';
import { ICustomer } from 'src/app/shared/interfaces/customer.interface';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { WindowService } from 'src/app/shared/services/window.service';
import { ITable, TABLES } from './tables-page.content';
import { Subscription, catchError } from 'rxjs';

@Component({
  selector: 'app-tables-page',
  templateUrl: './tables-page.component.html',
  styleUrls: ['./tables-page.component.scss'],
  animations: [APPEARD, LIST_ANIMATION_LATERAL],
})
export class TablesPageComponent implements OnInit {
  public subscribeMobile!: Subscription;
  public isMobile!: boolean;
  public isLoading: boolean = true;
  public data: ICustomer[] = [];
  public error: string = '';
  public show!: boolean;
  public state = 'ready';

  constructor(
    private customerService: CustomerService,
    private windowService: WindowService,
    private toasty: ToastyService
  ) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
  }

  public get tables(): ITable[] {
    return TABLES;
  }

  ngOnInit() {
    this.getData();

    setTimeout(() => {
      this.show = true;
    }, 0);

    this.subscribeMobile = this.windowService.isMobile.subscribe((isMobile: boolean) => (this.isMobile = isMobile));
  }

  private getData(): void {
    setTimeout(() => {
      this.data = this.customerService.getCustomers();
      this.isLoading = false;
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
