import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { WindowService } from 'src/app/shared/services/window.service';
import { ICustomer } from 'src/app/shared/interfaces/customer.interface';
import { APPEARD } from 'src/app/shared/animations/appeard.animation';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  animations: [APPEARD],
})
export class CustomerListComponent implements OnInit {
  public isMobile: boolean;
  public customerForm: UntypedFormGroup;

  public customers: ICustomer[] = [];
  public isLoading: boolean = true;

  public searchTerm!: string;
  public state: string = 'ready';

  constructor(private customerService: CustomerService, private windowService: WindowService) {
    this.isMobile = window.innerWidth <= windowService.widthMobile;
    this.customerForm = new UntypedFormGroup({ customerControl: new UntypedFormControl('') });
    this.windowService.isMobile.subscribe((isMobile: boolean) => (this.isMobile = isMobile));
  }

  ngOnInit() {
    this.getCustomers();
    this.filterCustomers();
  }

  private getCustomers(): void {
    setTimeout(() => {
      this.customers = this.customerService.getCustomers();
      this.isLoading = false;
    }, 500);
  }

  private filterCustomers(): void {
    this.customerForm.valueChanges.subscribe((searchTerm) => {
      this.searchTerm = searchTerm.customerControl;

      const result: ICustomer[] = this.customers.filter(
        (item) =>
          item.id?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.email?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.state?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.cel?.toLowerCase().includes(this.searchTerm)
      );
      
      this.customerService.filterCustomersEvent(result, this.searchTerm);
    });
  }
}
