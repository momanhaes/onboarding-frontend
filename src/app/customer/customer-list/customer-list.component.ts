import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { WindowService } from 'src/app/shared/services/window.service';
import { ICustomer } from 'src/app/shared/interfaces/customer.interface';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';
import { Subscription, catchError } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  animations: [APPEARD],
})
export class CustomerListComponent implements OnInit {
  public isMobile: boolean;
  public customerForm: UntypedFormGroup;
  public subscribeMobile: Subscription;

  public customers: ICustomer[] = [];
  public showPagination: boolean = true;
  public isLoading: boolean = true;

  public searchTerm!: string;
  public error: string = '';
  public state: string = 'ready';

  constructor(private customerService: CustomerService, private windowService: WindowService) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
    this.customerForm = new UntypedFormGroup({ customerControl: new UntypedFormControl('') });
    this.subscribeMobile = this.windowService.isMobile.subscribe((isMobile: boolean) => (this.isMobile = isMobile));
  }

  ngOnInit() {
    this.getCustomers();
    this.filterCustomers();
  }

  private getCustomers(): void {
    setTimeout(() => {
      this.customerService
        .getCustomers()
        .pipe(
          catchError((err) => {
            this.error = err;
            this.isLoading = false;
            return (this.customers = []);
          })
        )
        .subscribe((customers: ICustomer[]) => {
          this.customers = customers;
          this.isLoading = false;
        });
    }, 500);
  }

  public filterCustomers(): void {
    this.customerForm.valueChanges.subscribe((searchTerm) => {
      this.searchTerm = searchTerm.customerControl;
      this.showPagination = false;

      const result: ICustomer[] = this.customers.filter(
        (item) =>
          item.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.contact.email?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.age?.toString().includes(this.searchTerm.toLowerCase()) ||
          item.contact.cel?.toString().includes(this.searchTerm)
      );

      this.customerService.updateCustomersEvent(result, this.searchTerm);
    });
  }
}
