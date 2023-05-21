import { EventEmitter, Injectable } from '@angular/core';
import { ICustomer, ICustomerEvent } from '../interfaces/customer.interface';
import { KeyType, LocalStorageService } from './local-storage.service';
import { CUSTOMERS_MOCK } from 'src/app/customer/customer.mock';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  public notifier = new EventEmitter<ICustomerEvent>();

  constructor(private localStorageService: LocalStorageService) {}

  public getCustomers(): ICustomer[] {
    const customers = this.localStorageService.get(KeyType.MOCK);
    
    if (!customers) { 
      this.localStorageService.set(KeyType.MOCK, CUSTOMERS_MOCK); 
    }

    return this.localStorageService.get(KeyType.MOCK);
  }

  public getCustomerById(id: string): ICustomer {
    const customers = this.localStorageService.get(KeyType.MOCK);
    return customers.find((customer: ICustomer) => customer.id === id);
  }

  public createCustomer(customer: ICustomer): void {
    const customers = this.localStorageService.get(KeyType.MOCK);
    customer.id = (customers.length + 1).toString();
    customers.push(customer);
    this.localStorageService.set(KeyType.MOCK, customers);
  }

  public updateCustomer(customer: ICustomer): void {
    const customers = this.localStorageService.get(KeyType.MOCK);
    const index = customers.findIndex((item: ICustomer) => item.id === customer.id);
    customers[index] = customer;
    this.localStorageService.set(KeyType.MOCK, customers);
  }

  public deleteCustomer(id: string): void {
    const customers = this.localStorageService.get(KeyType.MOCK);
    const index = customers.findIndex((item: ICustomer) => item.id === id);
    customers.splice(index, 1);
    this.localStorageService.set(KeyType.MOCK, customers);
  }

  public filterCustomersEvent(customers: ICustomer[], searchTerm: string): void {
    this.notifier.emit({ customers: customers, searchTerm: searchTerm });
  }
}
